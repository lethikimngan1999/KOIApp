import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { TheoDoiThongTinDTO } from 'src/app/models/TheoDoiThongTinDTO';
import { KhachhangService } from 'src/app/shared/services/khachhang.service';
import { ThongtinDialogComponent } from '../thongtin-dialog/thongtin-dialog.component';

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
  thongtinDto = new TheoDoiThongTinDTO();
  validateForm: FormGroup;
  loading = false;
  avatarUrl: string;
  dataSource: any = [];

  constructor(
    private khachhangService: KhachhangService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    //this.isAdd = true;
    this.initFormValidate();
    this.getDetail('81501d69-9c42-4944-9ea8-177518aba70c');
  }

  public getDetail(mabenh: string) {
    this.khachhangService.getThongTin(mabenh).subscribe(response => {
      if (response.Status === true) {
        this.dataSource = response.Data;
        // this.hasBenh = true;
      }
      // console.log(this.selected);
    });
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


  public confirmDelete(data: any) {
    const modalDelete = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn xóa thông tin này?',
      nzContent: `<b style='color: red;'> Tên bệnh:${data.TenBenh}</b>`,
      nzOkText: 'Xóa',
      nzOkType: 'danger',
      nzOnOk: () => this.delete(data.MaThongTin),
      nzCancelText: 'Hủy',
    });
    // Return a result when closed
    modalDelete.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }


  /**
 * delete data
 */
  private delete(mathongtin: any) {
    const param: any = { mathongtin: mathongtin };
    this.khachhangService.delete(param).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Xóa thông tin thành công!');
        // get lai danh sach nhan vien
        this.getDetail('81501d69-9c42-4944-9ea8-177518aba70c');
      } else {
        this.message.create(TypeMessage.Error, 'Xóa thông tin không thành công!');
      }
    });
  }

  edit(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chinh sửa thông tin',
      nzContent: ThongtinDialogComponent,
      nzComponentParams: {
        thongtinDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '800',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.getDetail('81501d69-9c42-4944-9ea8-177518aba70c');;
    });
  }
}
