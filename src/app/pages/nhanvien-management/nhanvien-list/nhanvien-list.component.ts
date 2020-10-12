import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { NhanVienDTO } from 'src/app/models';
import { NhanvienService } from 'src/app/shared/services/nhanvien.service';
import { NhanvienDialogComponent } from '../nhanvien-dialog/nhanvien-dialog.component';

@Component({
  selector: 'app-nhanvien-list',
  templateUrl: './nhanvien-list.component.html',
  styleUrls: ['./nhanvien-list.component.css']
})
export class NhanvienListComponent implements OnInit {
  pageTitle = 'Danh sách nhân viên';
  dataSource: any = [];
  isConfirmLoading = false;

  constructor(public nhanVienService: NhanvienService,
              public router: Router,
              private message: NzMessageService,
              private modalService: NzModalService
              ) { }

ngOnInit() {
    this.isConfirmLoading = true;
    this.loadNhanVienList();
  }

  // get danh sach nhan vien
  public loadNhanVienList(): any {
    this.nhanVienService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

  // xem chi tiết nhân viên
  public viewNhanvien(manhanvien: any) {
    this.navigateDetail(manhanvien);
  }

  private navigateDetail(manhanvien: any) {
    if (manhanvien) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['nhanvien-management/detail/'], { queryParams: { manhanvien: manhanvien } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  createNhanVien(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm nhân viên',
      nzContent: NhanvienDialogComponent,
      nzComponentParams: {
        isAdd: true,
        nhanvienDto: new NhanVienDTO()
      },
      nzWidth: '800',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  editNhanVien(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chinh sửa nhân viên',
      nzContent: NhanvienDialogComponent,
      nzComponentParams: {
        nhanvienDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '800',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  public confirmDelete(manhanvien: any) {
    const modalDelete = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn xóa nhân viên này?',
      nzContent: `<b style='color: red;'> Mã nhân viên: ${manhanvien}</b>`,
      nzOkText: 'Xóa',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteNhanVien(manhanvien),
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
private deleteNhanVien(manhanvien: any) {
  const param: any = { manhanvien: manhanvien };
  this.nhanVienService.delete(param).subscribe(response => {
    if (response.Status === true) {
      this.message.create(TypeMessage.Success, 'Xóa nhân viên thành công!');
      // get lai danh sach nhan vien
      this.loadNhanVienList();
    } else {
      this.message.create(TypeMessage.Error, 'Xóa nhân viên không thành công!');
    }
  });
}


}
