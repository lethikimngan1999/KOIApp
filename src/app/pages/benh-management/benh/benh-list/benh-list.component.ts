import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhService } from 'src/app/shared/services/benh.service';
import { ThuocOfbenhDialogComponent } from '../thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component';

@Component({
  selector: 'app-benh-list',
  templateUrl: './benh-list.component.html',
  styleUrls: ['./benh-list.component.css']
})
export class BenhListComponent implements OnInit {

  isConfirmLoading = false;
  pageTitle = 'Danh sách các loại bệnh';
  dataSource: any = [];

  constructor(private benhService: BenhService,
              private message: NzMessageService,
              private router: Router,
              private modalService: NzModalService,
              ) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }
  public loadList(): any {
    this.benhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }


  showModal(data: any) {
    const modalAdd = this.modalService.create({
      nzTitle: 'Thêm thuốc điều trị cho bệnh ',
      nzContent: ThuocOfbenhDialogComponent,
      nzComponentParams: {
        isShowAdd: true,
        benhDto: JSON.parse(JSON.stringify(data)),
        maThuocs: JSON.parse(JSON.stringify(data.MaThuocs))
      },
      nzWidth: '600',
    });
    // Return a result when closed
    modalAdd.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  
  // xem chi tiết nhân viên
  public view(mabenh: any) {
    this.navigateDetail(mabenh);
  }

  private navigateDetail(mabenh: any) {
    if (mabenh) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

}
