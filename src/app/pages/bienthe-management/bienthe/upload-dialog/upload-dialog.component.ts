import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef, UploadFile } from 'ng-zorro-antd';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { TypeMessage } from 'src/app/app.constant';
import { HinhAnhBienTheDTO } from 'src/app/models/HinhAnhBienTheDTO';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { HinhanhService } from 'src/app/shared/services/hinhanh.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {
  isConfirmLoading = false;
  isShowAddEmployee = false;
  isSaveLoading = false;

  @Input() isAdd: boolean;
  @Input() hinhanhDto: HinhAnhBienTheDTO;


  validateForm: FormGroup;

  loading = false;
  avatarUrl: string;
  listBienThe: any;
  selectedValue = null;

  constructor(
    private hinhanhService: HinhanhService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private modal: NzModalRef,
    private bientheService: BientheService
  ) {
  }


  ngOnInit(): void {
    this.initFormValidate();
    if (!this.isAdd) {
      this.avatarUrl = this.hinhanhDto.DuongDan;
    }
 //   this.getBT();
  }


  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_lastName: ['', Validators.required],
      _rdo_gender: ['False', Validators.required],
     
      _ipUpload_image: ['', ''],
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
        this.message.error('Lỗi mạng!');
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
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Thêm không thành công!'
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
          this.message.create(TypeMessage.Success, 'Cập nhật thành công!'
          );
          console.log(this.hinhanhDto);
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }

  private getBT(): any {
    this.bientheService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listBienThe = response.Data;
      }
    });
  }
}
