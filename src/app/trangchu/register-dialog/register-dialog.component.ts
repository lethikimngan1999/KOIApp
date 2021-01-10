import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { TypeMessage } from 'src/app/app.constant';
import { TaiKhoanKhachHangDTO } from 'src/app/models/TaiKhoanKhachHangDTO';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

 
  isConfirmLoading = false;
  validateForm: FormGroup;
  isSaveLoading = false;
  selectedEmployee: any = [];
  @Input() userDto: TaiKhoanKhachHangDTO;
  
  constructor( private userService: UsersService,
    private modal: NzModalRef,
    private message: NzMessageService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    
      this.initFormValidate();
    
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_userName: ['', [Validators.email, Validators.required], [this.userNameAsyncValidator]],
     
      _ipText_HoLot: ['', Validators.required],
      _ipText_Ten: ['', Validators.required],
   //   _ipText_email: [null, [Validators.email, Validators.required]],
     _ipText_Pass: ['', [Validators.required, Validators.minLength(6)]],
     // _selectBox_role: ['', [Validators.required]],
    });
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        this.userService.getByUserName(control.value).subscribe(response => {
          if (response.Status && response.Data) {
            this.selectedEmployee = response.Data;
            // tslint:disable-next-line: triple-equals
            if (this.selectedEmployee.Id != this.userDto.Id) {
              observer.next({ error: true, duplicated: true });
            } else {
              observer.next(null);
            }
          } else {
            observer.next(null);
          }
          observer.complete();
        });
      }, 1000);
    })


  public handleCancelButton(): void {
    this.resetForm();
    this.modal.destroy();
  }

  public handleSubmitButton(): void {
    this.isSaveLoading = true;
    this.saveData();
    setTimeout(() => {
      this.isSaveLoading = false;
    }, 1000);
    this.modal.destroy();
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  private saveData() {
    this.isConfirmLoading = true;
   
      this.insertUser();

    
  }

  private insertUser(): void {
    if (this.userDto) {
      this.userDto.Status = 'Active';
      this.userDto.DiaChi = 'Not updated';
      this.userDto.TinhTP = 'Not updated';
      this.userDto.Sdt = 'Not updated';
      this.userDto.GhiChu = 'Not updated';
      this.userDto.UpdatedBy = 'Not updated';
      this.userDto.Email = this.userDto.UserName;
      this.userDto.MaNhanVien = '00000000-0000-0000-0000-000000000000';
      this.userDto.RoleIds = [
        '1a6416fd-0723-4e24-8fc8-e11d4d7bfe0e'
      ] ; // id role khachhang
      this.userService.CreateKhachHangAccount(this.userDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm tài khoản thành công');
        } else {
          this.message.create(TypeMessage.Error, 'Thêm tài khoản thất bại!');
        }
        this.isConfirmLoading = false;
      });
      this.resetForm();
    }

  }
}
