import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BienTheDTO } from 'src/app/models/BienTheDTO';
import { HinhAnhBienTheDTO } from 'src/app/models/HinhAnhBienTheDTO';
import { UploadImgBTComponent } from 'src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { BientheDialogComponent } from '../bienthe-dialog/bienthe-dialog.component';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';

interface DataItem {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-bienthe-list',
  templateUrl: './bienthe-list.component.html',
  styleUrls: ['./bienthe-list.component.css']
})
export class BientheListComponent implements OnInit {

  searchValue = '';
  visible = false;

  pageTitle = 'Danh sách tất cả biến thể';
  dataSource: any = [];
  isConfirmLoading = false;

  constructor(public bienTheService: BientheService,
              public router: Router,
              private message: NzMessageService,
              private modalService: NzModalService) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.dataSource = this.dataSource.filter((item: BienTheDTO) => item.TenBienThe.indexOf(this.searchValue) !== -1);
  }


  // get danh sach nhan vien
  public loadList(): any {
    this.bienTheService.getListAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }


  create(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm biến thể',
      nzContent: BientheDialogComponent,
      nzComponentParams: {
        isAdd: true,
        bientheDto: new BienTheDTO()
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
      nzTitle: 'Chinh sửa thông tin biến thể',
      nzContent: BientheDialogComponent,
      nzComponentParams: {
        bientheDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  public view(mabienthe: any) {
    this.navigateDetail(mabienthe);
  }

  private navigateDetail(mabienthe: any) {
    if (mabienthe) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['admin/bien-the/chitiet/'], { queryParams: { mabienthe: mabienthe } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  add(data: any) {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm biến thể',
      nzContent: UploadDialogComponent,
      nzComponentParams: {
        isAdd: true,
        hinhanhDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
}

public confirmDelete(data: any) {
  const modalDelete = this.modalService.confirm({
    nzTitle: 'Bạn có chắc chắn xóa biến thể này?',
    nzContent: `<b style='color: red;'> Bệnh: ${data.TenBienThe}</b>`,
    nzOkText: 'Xóa',
    nzOkType: 'danger',
    nzOnOk: () => this.delete(data.MaBienThe),
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
private delete(mabienthe: any) {
const param: any = { mabienthe: mabienthe };
this.bienTheService.delete(param).subscribe(response => {
  if (response.Status === true) {
    this.message.create(TypeMessage.Success, 'Xóa thành công!');
  
    this.loadList();
  } else {
    this.message.create(TypeMessage.Error, 'Xóa không thành công!');
  }
});
}

}
