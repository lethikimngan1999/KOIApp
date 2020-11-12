import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { ThuocDTO } from 'src/app/models/ThuocDTO';
import { ThuocService } from 'src/app/shared/services/thuoc.service';
import { BenhOfthuocDialogComponent } from '../benh-ofthuoc-dialog/benh-ofthuoc-dialog.component';
import { ThuocDialogComponent } from '../thuoc-dialog/thuoc-dialog.component';

@Component({
  selector: 'app-thuoc-list',
  templateUrl: './thuoc-list.component.html',
  styleUrls: ['./thuoc-list.component.css']
})
export class ThuocListComponent implements OnInit {
  isConfirmLoading = false;
  pageTitle = 'Danh sách các loại thuốc';
  dataSource: any = [];
  sName: string = '';

  constructor(private thuocService: ThuocService,
              private modalService: NzModalService,
              private message: NzMessageService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }
  public loadList(): any {
    this.thuocService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }

  showModal(data: any) {
    const modalAdd = this.modalService.create({
      nzTitle: 'Thêm bệnh được thuốc điều trị ',
      nzContent: BenhOfthuocDialogComponent,
      nzComponentParams: {
        isShowAdd: true,
        thuocDto: JSON.parse(JSON.stringify(data)),
        maBenhs: JSON.parse(JSON.stringify(data.MaBenhs))
      },
      nzWidth: '600',
    });
    // Return a result when closed
    modalAdd.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  // xem chi tiết
  public view(mathuoc: any) {
    this.navigateDetail(mathuoc);
  }

  private navigateDetail(mathuoc: any) {
    if (mathuoc) {
      // chuyen sang màn hình chi tiết 
      this.router.navigate(['admin/cac-loai-thuoc/chitiet/'], { queryParams: { mathuoc: mathuoc } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  create(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm thuốc',
      nzContent: ThuocDialogComponent,
      nzComponentParams: {
        isAdd: true,
        thuocDto: new ThuocDTO()
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  edit(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin ',
      nzContent: ThuocDialogComponent,
      nzComponentParams: {
        thuocDto: JSON.parse(JSON.stringify(data)),
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  public confirmDelete(data: any) {
    const modalDelete = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn xóa thuốc này?',
      nzContent: `<b style='color: red;'> Thuốc: ${data.TenThuoc}</b>`,
      nzOkText: 'Xóa',
      nzOkType: 'danger',
      nzOnOk: () => this.delete(data.MaThuoc),
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
private delete(mathuoc: any) {
  const param: any = { mathuoc: mathuoc };
  this.thuocService.delete(param).subscribe(response => {
    if (response.Status === true) {
      this.message.create(TypeMessage.Success, 'Xóa thành công!');
     
      this.loadList();
    } else {
      this.message.create(TypeMessage.Error, 'Xóa không thành công!');
    }
  });
}

// xem chi tiết 
public viewBenh(mabenh: any) {
  this.navigateDetailBenh(mabenh);
}

private navigateDetailBenh(mabenh: any) {
  if (mabenh) {
    // chuyen sang màn hình chi tiết 
    this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
  } else {
    this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
  }
}


}
