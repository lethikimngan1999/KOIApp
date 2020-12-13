import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { TheoDoiThongTinDTO } from 'src/app/models/TheoDoiThongTinDTO';
import { KhachhangService } from 'src/app/shared/services/khachhang.service';

@Component({
  selector: 'app-thongtin-list',
  templateUrl: './thongtin-list.component.html',
  styleUrls: ['./thongtin-list.component.css']
})
export class ThongtinListComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;
  //isAdd: boolean;
  thongtinDto =  new TheoDoiThongTinDTO();
  validateForm: FormGroup;
  loading = false;
  avatarUrl: string;
  dataSource: any = [];

  constructor(
    private khachhangService: KhachhangService,
    private fb: FormBuilder,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    //this.isAdd = true;
    this.initFormValidate();
 
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_TenThongTin: ['', Validators.required],
      _ipText_TenBenh: ['', Validators.required],
      _ipText_TenThuoc: ['', Validators.required],
      _ipDate_ThoiGianDanhThuoc: ['', Validators.required],
 
      _ipText_TrieuChung: ['', Validators.required],
      _ipTextarea_KetQua: ['', Validators.required],
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

  
  public handleSubmitButton(): void {
    this.isSaveLoading = true;
    this.saveData();
    setTimeout(() => {
      this.isSaveLoading = false;
    }, 1000);
   this.resetForm();
  }

  private saveData() {
    this.isConfirmLoading = true;
    // if (this.isAdd) {
      this.insert();

    //} 
    // else {
    //   this.update();
    // }
  }

  // tao  moi
  private insert(): void {
    if (this.thongtinDto) {
      this.thongtinDto.MaKhachHang = 
        '81501d69-9c42-4944-9ea8-177518aba70c'; // id khachhang
      this.khachhangService.create(this.thongtinDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Lưu dữ liệu thành công!'
          );
        //  this.loadList();
        } else {
          this.message.create(TypeMessage.Error, 'Lưu dữ liệu không thành công!'
          );
        }
        this.isConfirmLoading = false;
        this.resetForm();
      });
    }
  }
}
