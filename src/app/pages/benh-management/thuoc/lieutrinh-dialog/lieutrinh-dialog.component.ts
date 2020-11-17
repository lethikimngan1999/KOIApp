import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { LieuTrinhDTO } from 'src/app/models/LieuTrinhDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-lieutrinh-dialog',
  templateUrl: './lieutrinh-dialog.component.html',
  styleUrls: ['./lieutrinh-dialog.component.css']
})
export class LieutrinhDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;
  @Input() isAddlt: boolean;
  @Input() lieutrinhDto: LieuTrinhDTO;
  validateForm: FormGroup;

  selected: any = [];

  constructor(
    private thuocService: ThuocService,
    private message: NzMessageService,
    private modal: NzModalRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initFormValidate();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
     _ipText_Tenlieutrinh:  ['', Validators.required],
      _ipTextarea_MoTa: ['', Validators.required],
    });
  }

  public handleCancelButton(): void {
    this.resetForm();
    this.modal.destroy();
  }

  public handleSubmitButton(): void {
    this.isSaveLoading = true;
    this.saveData();
    setTimeout(() => {
      this.isSaveLoading = false;
    }, 1000);
    this.modal.destroy();
  }

  private saveData() {
    this.isConfirmLoading = true;
    if (!this.lieutrinhDto || this.isAddlt) {
      this.insert();

    } else {
      this.update();
    }
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

   // tao  moi
   private insert(): void {
    if (this.lieutrinhDto) {
      this.thuocService.createLieuTrinh(this.lieutrinhDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
        //  this.loadList();
        } else {
          this.message.create(TypeMessage.Error, 'Thêm không thành công!'
          );
        }
        this.isConfirmLoading = false;
        this.resetForm();
      });
    }
  }

  private update() {
    if (this.lieutrinhDto) {
      this.thuocService.updateLieuTrinh(this.lieutrinhDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật liệu trình thành công!'
          );
          console.log(this.lieutrinhDto);
         // this.loadList();
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật liệu trình không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }
}
