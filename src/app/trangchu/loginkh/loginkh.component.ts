import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd';
import { AuthenticationService } from 'src/app/common_base/authentication/authentication.service';
import { LoginDTO } from 'src/app/models/LoginDTO';
import { LoginService } from 'src/app/shared/services/login.service';
import * as CONFIG from './../../app.config';

@Component({
  selector: 'app-loginkh',
  templateUrl: './loginkh.component.html',
  styleUrls: ['./loginkh.component.css']
})
export class LoginkhComponent implements OnInit {

  pageTitle = CONFIG.SITENAME;
  year: number = new Date().getFullYear();
  pageFooter = CONFIG.SITENAME + ' ©' + this.year;
  validateForm: FormGroup;
   isShowMessage = false;
   expression = true
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthenticationService,
    private modal: NzModalRef,
  ) {  document.body.className = 'login-body'; }

  ngOnInit(): void {
    this.initFormValidate();
    // if (this.isLogin()) {
    //   this.router.navigateByUrl('/trangchu');
    // }
  }

  
  public handleSubmitButton(): void {
   // this.isSaveLoading = true;
    this.isLogin();
    // setTimeout(() => {
    //   this.isSaveLoading = false;
    // }, 1000);
    this.modal.destroy();
    this.router.navigateByUrl('/trangchu/index');
  
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_username: [null, [Validators.email, Validators.required]],
      _ipText_password: [null, [Validators.required]]
    });
  }

  public getTokenFromLocalStorage() {
    return localStorage.getItem(CONFIG.localStorageKey);
  }

  public setTokenFromLocalStorage(value: string) {
    localStorage.setItem(CONFIG.localStorageKey, value);
  }

  public isLogin(): boolean {
    const tokenData = this.getTokenFromLocalStorage();
    if (tokenData && tokenData !== 'null') {
      return true;
    }
    return false;
  }

  private login() {
    const loginDto: LoginDTO = {
      username: this.validateForm.controls._ipText_username.value,
      password: this.validateForm.controls._ipText_password.value
    };

    // this.authService.login(loginDto)
    // .pipe()
    // .subscribe(
    //   data => {
    //     this.router.navigateByUrl('admin');
    //   },
    //   error => {
    //     this.isShowMessage = true;
    //   });
    this.loginService.getToken(loginDto).subscribe(response => {
      if (response.Status === true && response.Data == null) {
        this.isShowMessage = true;
      }
      if (response && response.Data && response.Data !== 'null') {
        this.setTokenFromLocalStorage(response.Data);
        this.router.navigateByUrl('/trangchu/index');
        console.log(response.Data);
      }
    });

  }

  submitForm(): void {
    this.isShowMessage = false;
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls)  {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // check valid
    if (this.validateForm.status === 'INVALID') {
      return;
    }
    this.login();
  }

  public handleCancelButton(): void {
    this.resetForm();
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
}
