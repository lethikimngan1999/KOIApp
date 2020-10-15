import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzMessageService, NzModalRef, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { TypeMessage } from 'src/app/app.constant';
import { HinhAnhBienTheDTO } from 'src/app/models/HinhAnhBienTheDTO';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { HinhanhService } from 'src/app/shared/services/hinhanh.service';

@Component({
  selector: 'app-upload-img-bt',
  templateUrl: './upload-img-bt.component.html',
  styleUrls: ['./upload-img-bt.component.css']
})
export class UploadImgBTComponent implements OnInit {

  imageUrl : string = "/assets/image/imageBT/default-image=image.png";
  fileToUpload: File = null;
  listbt: any;
  loading = false;
  avatarUrl: string;

  isConfirmLoading = false;
  isShowAddNhanVien = false;
  isSaveLoading = false;

  @Input() hinhanhDto: HinhAnhBienTheDTO;
  @Input() isAdd: boolean;
  constructor(
    private bientheService: BientheService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private hinhanhService: HinhanhService,
    private modal: NzModalRef,
   ) { }

  ngOnInit(): void {
    this.getBT();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // tslint:disable-next-line: prefer-const
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  private getBT(): any {
    this.bientheService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listbt = response.Data;
      }
    });
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.message.error('Vui lòng tải lên hình ảnh có định dạng PNG hoặc JPEG!');
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.message.error('Vui lòng tải lên hình ảnh có dung lượng nhỏ hơn hoặc bằng 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
          this.hinhanhDto.DuongDan = this.avatarUrl;
        });
        break;
      case 'error':
        this.message.error('Network error');
        this.loading = false;
        break;
    }
  }


  public handleSubmitButton(): void {
    this.isSaveLoading = true;
    this.saveData();
    setTimeout(() => {
      this.isSaveLoading = false;
    }, 1000);
    this.modal.destroy();
  }

  /**
   * check them hoac chinh sua nhan vien
   */
  private saveData() {
    this.isConfirmLoading = true;
    if (!this.hinhanhDto || this.isAdd) {
      this.InsertNhanVien();
    } else {
      this.UpdateNhanVien();
    }
  }

  // tao nhan vien moi
  private InsertNhanVien(): void {
    if (this.hinhanhDto) {
      this.hinhanhService.create(this.hinhanhDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm nhân viên thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Thêm nhân viên không thành công!'
          );
        }
        this.isConfirmLoading = false;
        //this.resetForm();
      });
    }
  }

  private UpdateNhanVien() {
    if (this.hinhanhDto) {
      this.hinhanhService.update(this.hinhanhDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật nhân viên thành công!'
          );
          console.log(this.hinhanhDto);
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật nhân viên không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }

}
