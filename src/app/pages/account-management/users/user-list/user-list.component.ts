import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { UserDTO } from 'src/app/models/UserDTO';
import { LoginService } from 'src/app/shared/services/login.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = 'Danh sách tài khoản người dùng hoạt động';
  headerListUserLocked: string = "Danh sách tài khoản bị khóa";
  validateForm: FormGroup;

  isShowAddRole = false;
  isSaveLoading = false;
  isLockAccount = false;
  public isShowAddUser = false;
  public isConfirmLoading = false;

  listUser: UserDTO[] = [];
  listUserAccountLocked: UserDTO[] = [];
  modelRoleModal: any = [];
  listUserRoles: any = [];

  user: UserDTO;
  idUserSelected: string;
  roleIds: any;
  currentUser: UserDTO;

  constructor(
    private userService: UsersService,
    private modalService: NzModalService,
    private message: NzMessageService,
    public loginService: LoginService,

  ) {}

  ngOnInit(): void {
     // get danh sách tài khoản người dùng
    this.getListUsers();
    this.isConfirmLoading = false;
    this.getUser();


  }

  private getListUsers(): any {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.userService.getAllUserAccountActive().subscribe(response => {
        if (response && response.Status) {
          this.listUser = JSON.parse(JSON.stringify(response.Data));        }
      });
    }, 2000);
   // this.isConfirmLoading = false;
    this.getListUsersAccountLocked();
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


  createUser(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm tài khoản người dùng',
      nzContent: UserDialogComponent,
      nzComponentParams: {
        isAdd: true,
        userDto: new UserDTO()
      },
      nzWidth: '800',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  private getListUsersAccountLocked(): any {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.userService.getAllUserAccountLocked().subscribe(response => {
        if (response && response.Status) {
          this.listUserAccountLocked = JSON.parse(JSON.stringify(response.Data));
        }
      });
    }, 1000);
    this.isConfirmLoading = false;
  }

  editUser(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin tài khoản ' + data.UserName,
      nzContent: UserDialogComponent,
      nzComponentParams: {
        userDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '480',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }


  lockAccount(data: any) {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.changeStatusAccountToLocked(data);
    }, 2000);
  }

  private changeStatusAccountToLocked(userSelected: any) {
    if (userSelected) {
      userSelected.Status = 'Locked';
      this.userService.updateStatusAccount(userSelected).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Khóa tài khoản thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Khóa tài khoản không thành công!'
          );
        }
        this.isConfirmLoading = false;
        this.ngOnInit();
      });

    }
  }

  unLockAccount(data: any) {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.changeStatusAccountToActive(data);
    }, 2000);
  }


  private changeStatusAccountToActive(userSelected: any) {
    if (userSelected) {
      userSelected.Status = 'Active';
      this.userService.updateStatusAccount(userSelected).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Mở khóa tài khoản thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Mở khóa tài khoản không thành công!'
          );
        }
        this.isConfirmLoading = false;
        this.ngOnInit();
      });
    }
  }

  public resetPassword(data: any) {
    this.modalService.confirm({
      nzTitle: 'Đặt lại mật khẩu',
      nzContent: `<b style='color: red;'>Bạn có chắc chắn đặt lại mật khẩu cho tài khoản ` + data.UserName + `?</b>`,
      nzOkText: 'Đồng ý',
      nzOkType: 'danger',
      nzOnOk: () => this.handleResetPasswordAccount(data),
      nzCancelText: 'Hủy',
    });
  }

  /* reset password */
  private handleResetPasswordAccount(userResetPass: any) {
    this.userService.resetPasswordAccount(userResetPass).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Đặt lại mật khẩu cho tài khoản thành công!');
      } else {
        this.message.create(TypeMessage.Error, 'Đặt lại mật khẩu cho tài khoản không thành công!');
      }
    });
  }


}
