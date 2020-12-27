import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from '../app.constant';
import { BaseComponent } from '../common_base/base.component';
import { UserDTO } from '../models';
import { TaiKhoanKhachHangDTO } from '../models/TaiKhoanKhachHangDTO';
import { BientheService } from '../shared/services/bienthe.service';
import { HinhanhService } from '../shared/services/hinhanh.service';
import { LoginService } from '../shared/services/login.service';
import { LoginkhComponent } from './loginkh/loginkh.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import * as CONFIG from './../app.config';
import { CustomerChangepassComponent } from './customer-changepass/customer-changepass.component';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent extends BaseComponent implements OnInit  {

  dataSource: any = [];
  Search = '';
  sName: string = '';
  //sName: string = '';
  currentUser: UserDTO;
  expression = true;

  constructor( public bientheService: BientheService,
    public hinhanhService: HinhanhService,
    private message: NzMessageService,
    private modalService: NzModalService,
    public loginService: LoginService,
    public router: Router,) {
      super(router, loginService);
     }

  ngOnInit(): void {
    this.loadList();
    this.getUser();
    console.log(this.currentUser);
  }

  private getUser() {
    this.loginService.getUser().subscribe(response => {
      if (response.Status === false) {
        return;
      }
      if(response.Data.MaKhachHang === "00000000-0000-0000-0000-000000000000") {  return     this.router.navigateByUrl('/admin');}
      if (response && response.Data) {
        this.currentUser = response.Data;
        this.expression = false;
      }
    });
  }

  logout() {
    this.setTokenCustomerFromLocalStorage('');
     const token = this.getTokenCustomerFromLocalStorage();
     if (token === '' || token) {
      this.router.navigateByUrl('/trangchu/index');
      this.expression = true;
   }
  }

  setTokenCustomerFromLocalStorage(value: string) {
    localStorage.setItem(CONFIG.localStorageKey, value);
}

 getTokenCustomerFromLocalStorage() {
  return localStorage.getItem(CONFIG.localStorageKey);
}

showModalChangePassword(data: any) {
  const modalChangePassword = this.modalService.create({
    nzTitle: 'Đổi mật khẩu cho tài khoản ',
    nzContent: CustomerChangepassComponent,
    nzComponentParams: {
      userDto: JSON.parse(JSON.stringify(data))
    },
    nzWidth: '480',
  });
  modalChangePassword.afterClose.subscribe(() => {
    return this.ngOnInit();
  });
}

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

//login   
login(): void {

    const modalCreate = this.modalService.create({
      //nzTitle: 'Thêm bệnh',
      nzContent: LoginkhComponent,
      nzComponentParams: {
    //    isAdd: true,
        //userDto: new TaiKhoanKhachHangDTO()
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
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
