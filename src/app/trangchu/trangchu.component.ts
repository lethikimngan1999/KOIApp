import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from '../app.constant';
import { TaiKhoanKhachHangDTO } from '../models/TaiKhoanKhachHangDTO';
import { BientheService } from '../shared/services/bienthe.service';
import { HinhanhService } from '../shared/services/hinhanh.service';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  dataSource: any = [];
  Search = '';
  sName: string = '';
  //sName: string = '';
 
  constructor( public bientheService: BientheService,
    public hinhanhService: HinhanhService,
    private message: NzMessageService,
    private modalService: NzModalService,
    public router: Router,) { }

  ngOnInit(): void {
    this.loadList();
  }

  // onFilter() {
  //   this.Search = this.TenBienThe;
  // }

   // get danh sach 
   public loadList(): any {
    this.bientheService.getListAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        //this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }


   // xem chi tiết nhân viên
   public view(mabienthe: any) {
    this.navigateDetail(mabienthe);
  }

  private navigateDetail(mabienthe: any) {
    if (mabienthe) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['trangchu/chitiet/'], { queryParams: { mabienthe: mabienthe } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  
  create(): void {
    const modalCreate = this.modalService.create({
      //nzTitle: 'Thêm bệnh',
      nzContent: RegisterDialogComponent,
      nzComponentParams: {
    //    isAdd: true,
        userDto: new TaiKhoanKhachHangDTO()
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
}
