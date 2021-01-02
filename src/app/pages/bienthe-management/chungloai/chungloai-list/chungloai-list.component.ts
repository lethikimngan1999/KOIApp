import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { ChungLoaiDTO } from 'src/app/models/ChungLoaiDTO';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';
import { ChungloaiDialogComponent } from '../chungloai-dialog/chungloai-dialog.component';

@Component({
  selector: 'app-chungloai-list',
  templateUrl: './chungloai-list.component.html',
  styleUrls: ['./chungloai-list.component.css']
})
export class ChungloaiListComponent implements OnInit {

  pageTitle = 'Danh sách chủng loại';
  dataSource: any = [];
  isConfirmLoading = false;
  sName: string = '';
  constructor(public chungloaiService: ChungloaiService,
              public router: Router,
              private message: NzMessageService,
              private modalService: NzModalService
              ) { }

ngOnInit() {
    this.isConfirmLoading = true;
    this.loadList();
  }

  // get danh sach 
  public loadList(): any {
    this.chungloaiService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

  // xem chi tiết 
  public view(machungloai: any) {
    this.navigateDetail(machungloai);
  }

  private navigateDetail(machungloai: any) {
    if (machungloai) {
      // chuyen sang màn hình chi tiết 
      this.router.navigate(['admin/chung-loai/chitiet/'], { queryParams: { machungloai: machungloai } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  create(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm chủng loại',
      nzContent: ChungloaiDialogComponent,
      nzComponentParams: {
        isAdd: true,
        chungloaiDto: new ChungLoaiDTO()
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
      nzTitle: 'Chinh sửa thông tin chủng loại',
      nzContent: ChungloaiDialogComponent,
      nzComponentParams: {
        chungloaiDto: JSON.parse(JSON.stringify(data))
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
      nzTitle: 'Bạn có chắc chắn xóa chủng loại này?',
      nzContent: `<b style='color: red;'> Tên chủng loại:${data.TenChungLoai}</b>`,
      nzOkText: 'Xóa',
      nzOkType: 'danger',
      nzOnOk: () => this.delete(data.MaChungLoai),
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
private delete(machungloai: any) {
  const param: any = { machungloai: machungloai };
  this.chungloaiService.delete(param).subscribe(response => {
    if (response.Status === true) {
      this.message.create(TypeMessage.Success, 'Xóa chủng loại thành công!');
      // get lai danh sach nhan vien
      this.loadList();
    } else {
      this.message.create(TypeMessage.Error, 'Xóa chủng loại không thành công!');
    }
  });
}

}
