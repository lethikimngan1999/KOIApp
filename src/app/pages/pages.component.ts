import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { AuthenticationService } from '../common_base/authentication/authentication.service';
import { BaseComponent } from '../common_base/base.component';
import { UserDTO } from '../models/UserDTO';
import { LoginService } from '../shared/services/login.service';
import * as CONFIG from './../app.config';
import { UserResetPasswordComponent } from './account-management/users/user-reset-password/user-reset-password.component';
import * as CONSTANT from '../app.constant';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent extends BaseComponent implements OnInit {
  pageTitle = CONFIG.SITENAME;
  year: number = new Date().getFullYear();
  pageFooter = CONFIG.SITENAME + ' ©' + this.year;
  isCollapsed = false;
  mode = false;
  dark = false;

  menus = [];
  // tslint:disable-next-line: new-parens
  public user: UserDTO = new UserDTO;
  currentUser: UserDTO;
  constructor(
    public router: Router,
    public loginService: LoginService,
    public modalService: NzModalService,
    private authenticationService: AuthenticationService
  ) {
    super(router, loginService);
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  //  console.log(' this.currentUser ' + this.currentUser.RoleIds);
    console.log(this.currentUser);
  }

  ngOnInit(): void {
    // if (this.currentUser.ListRoles[0].Name === CONSTANT.Role.Admin)
    // {
    //   this.menus = CONFIG.MENUS_SIDEBAR;
    //   console.log("isAdmin" + this.authenticationService.isAdmin);
    // } 
    //else
    // if (this.currentUser.ListRoles[0].Name === CONSTANT.Role.NhanVien) {
    //   this.menus = CONFIG.MENUS_EMPLOYEE_SIDEBAR;
    //   console.log("isNhanVien");
    // }
    this.getUser();
  }


  private getUser() {
    this.loginService.getUser().subscribe(response => {
      if (response.Status === false) {
        return;
      }
      if (response && response.Data) {
        this.currentUser = response.Data;
      }
    });
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.setTokenFromLocalStorage('');
    const token = this.getTokenFromLocalStorage();
    if (token === '' || token) {
      this.router.navigateByUrl('/login');
    }
  }

  showModalChangePassword(data: any) {
    const modalChangePassword = this.modalService.create({
      nzTitle: 'Đổi mật khẩu cho tài khoản ',
      nzContent: UserResetPasswordComponent,
      nzComponentParams: {
        userDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '480',
    });
    modalChangePassword.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
}
