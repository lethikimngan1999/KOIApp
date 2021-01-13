import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BaseComponent } from 'src/app/common_base/base.component';
import { UserChangePasswordDTO, UserDTO } from 'src/app/models';
import { LoginService } from 'src/app/shared/services/login.service';
import { UsersService } from 'src/app/shared/services/users.service';
import * as CONFIG from '../../app.config';

@Component({
  selector: 'app-customer-changepass',
  templateUrl: './customer-changepass.component.html',
  styleUrls: ['./customer-changepass.component.css']
})
export class CustomerChangepassComponent extends BaseComponent {
  validateForm: FormGroup;
  @Input() userDto: UserDTO;
  selectedEmployee: any[];
  expression = true;
  @Input() logout: Function;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private modal: NzModalRef,
    public router: Router,
    public loginService: LoginService,
    public message: NzMessageService
  ) {
    super(router, loginService);
  }

  ngOnInit(): void {
    this.initFormValidate();
    console.log( this.userDto.Id);
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_userName: [''],
      _ipText_OldPass: ['', Validators.required],
      _ipText_NewPass: ['', [Validators.required, Validators.minLength(6)]],
      _ipText_ConfirmNewPass: ['', [this.confirmValidatetor]],
    });
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls._ipText_ConfirmNewPass.updateValueAndValidity());
  }

  confirmValidatetor = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls._ipText_NewPass.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  public handleCancelButton(): void {
    this.resetForm();
    this.modal.destroy();
  }

  public handleSubmitButton(): void {
    this.saveData();
    setTimeout(() => {

    }, 3000);
    this.modal.destroy();
  }
  private saveData() {
    const userChangePassDTO: UserChangePasswordDTO = {
      UserId: this.userDto.Id,
      oldPassword: this.validateForm.controls._ipText_OldPass.value,
      newPassword: this.validateForm.controls._ipText_NewPass.value,
    };
    this.changePassword(userChangePassDTO);
  }

  private changePassword(userChangePassDTO: any) {
    if (userChangePassDTO) {
      this.userService.updatePasswordAccount(userChangePassDTO).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Mật khẩu của bạn vừa được thay đổi, vui lòng đăng nhập lại với mật khẩu mới!');
          setTimeout(() => {

          }, 3000);
          this.logout();
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật mật khẩu không thành công. Kiểm tra lại mật khẩu hiện tại!');
        }
      });
    }
  }
  // private logout() {
  //   this.setTokenCustomerFromLocalStorage('');
  //   const token = this.getTokenCustomerFromLocalStorage();
  //   if (token === '' || token) {
  //     this.router.navigateByUrl('/trangchu/index');
  //     this.expression = true;
  //   }
  // }

  
  setTokenCustomerFromLocalStorage(value: string) {
    localStorage.setItem(CONFIG.localStorageKey, value);
}

 getTokenCustomerFromLocalStorage() {
  return localStorage.getItem(CONFIG.localStorageKey);
}

}