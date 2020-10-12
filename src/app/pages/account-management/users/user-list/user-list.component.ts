import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { UserDTO } from 'src/app/models/UserDTO';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = "Danh sách tài khoản người dùng hoạt động";
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


  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
      //get danh sách tài khoản người dùng
      this.getListUsers();

  }

  private getListUsers(): any {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.userService.getAllUserAccountActive().subscribe(response => {
        if (response && response.Status) {
          this.listUser = JSON.parse(JSON.stringify(response.Data));        }
      });
    }, 2000);
    this.isConfirmLoading = false;
    this.getListUsersAccountLocked();
  }

  // private getListUsers(): any {
  //   this.userService.getAllEmployeeAccount().subscribe(response => {
  //     if (response && response.Status) {
  //       this.listUser = JSON.parse(JSON.stringify(response.Data));
  //     }
  //   });
  // }

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

}
