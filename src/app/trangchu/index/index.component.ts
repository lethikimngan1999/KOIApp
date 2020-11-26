import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhService } from 'src/app/shared/services/benh.service';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  dataSource: any = [];
  dataSourceBenh: any = [];
  constructor(public benhService: BenhService,
    public bientheService: BientheService,
    private message: NzMessageService,
    public router: Router,
    private modalService: NzModalService) { }

  ngOnInit(): void {
    this.loadList();
    this.loadListBenh();
  }

   // get danh sach
   public loadList(): any {
    this.bientheService.getListAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        // this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }

   // get danh sach
   public loadListBenh(): any {
    this.benhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSourceBenh = response.Data;
      }
    });
}
    //  // xem chi tiết 
    public view(mabienthe: any) {
      this.navigateDetail(mabienthe);
    }

    private navigateDetail(mabienthe: any) {
      if (mabienthe) {
        // chuyen sang màn hình chi tiết
        const modalAdd = this.modalService.info({
          nzContent: ProductDetailComponent,
          nzComponentParams: {
            mabienthe: JSON.parse(JSON.stringify(mabienthe)),
            //    //   maThuocs: JSON.parse(JSON.stringify(data.MaThuocs))
          },
          nzWidth: '1200',
          nzOkText: 'Đóng'
        });
        // Return a result when closed
        modalAdd.afterClose.subscribe(() => {
          return this.ngOnInit();
        });
      } else {
        this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
      }
    }
}
