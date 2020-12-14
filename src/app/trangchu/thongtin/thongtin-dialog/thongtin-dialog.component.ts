import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { TheoDoiThongTinDTO } from 'src/app/models/TheoDoiThongTinDTO';
import { KhachhangService } from 'src/app/shared/services/khachhang.service';

@Component({
  selector: 'app-thongtin-dialog',
  templateUrl: './thongtin-dialog.component.html',
  styleUrls: ['./thongtin-dialog.component.css']
})
export class ThongtinDialogComponent implements OnInit {

  @Input() thongtinDto: TheoDoiThongTinDTO;
  validateForm: FormGroup;
  isSaveLoading = false;

  constructor(  private khachhangService: KhachhangService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private modal: NzModalRef,) { }

  ngOnInit(): void {
    this.initFormValidate();
  }
  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_TenThongTin: ['', Validators.required],
      _ipText_TenBenh: ['', Validators.required],
      _ipText_TenThuoc: ['', Validators.required],
      _ipDate_ThoiGianDanhThuoc: ['', Validators.required],

      _ipText_TrieuChung: ['', Validators.required],
      _ipTextarea_KetQua: [''],
      _ipTextarea_GhiChu: ['']
    });
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }


  private saveData() {
  //  this.isConfirmLoading = true;
  
      this.Update();
    
  }

  private Update() {
    if (this.thongtinDto) {
      this.khachhangService.update(this.thongtinDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật thông tin thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật thông tin không thành công!'
          );
        }
   //    this.isConfirmLoading = false;
      });
    }
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

}
