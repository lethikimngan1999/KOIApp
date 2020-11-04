import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { BenhDialogComponent } from '../benh-dialog/benh-dialog.component';
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

  create(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm bệnh',
      nzContent: BenhDialogComponent,
      nzComponentParams: {
        isAdd: true,
        benhDto: new BenhDTO()
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
      nzContent: BenhDialogComponent,
      nzComponentParams: {
        benhDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
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

  
  // xem chi tiết 
  public view(mabenh: any) {
    this.navigateDetail(mabenh);
  }

  private navigateDetail(mabenh: any) {
    if (mabenh) {
      // chuyen sang màn hình chi tiết 
      this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

}
