import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule, NzButtonModule } from 'ng-zorro-antd';

import { PagesComponent } from './pages.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NhanvienListComponent } from './nhanvien-management/nhanvien-list/nhanvien-list.component';
import { NhanvienDetailComponent } from './nhanvien-management/nhanvien-detail/nhanvien-detail.component';
import { NhanvienDialogComponent } from './nhanvien-management/nhanvien-dialog/nhanvien-dialog.component';
import { UserListComponent } from './account-management/users/user-list/user-list.component';

import { ImgListComponent } from './image-management/img-bienthe/img-list/img-list.component';
import { UploadImgBTComponent } from './image-management/img-bienthe/upload-img-bt/upload-img-bt.component';
import { UserDialogComponent } from './account-management/users/user-dialog/user-dialog.component';
import { UserResetPasswordComponent } from './account-management/users/user-reset-password/user-reset-password.component';
import { FilterNVPipe } from '../pipes/filter-nv.pipe';
import { BenhListComponent } from './benh-management/benh/benh-list/benh-list.component';
import { ThuocListComponent } from './benh-management/thuoc/thuoc-list/thuoc-list.component';

import { BenhDetailComponent } from './benh-management/benh/benh-detail/benh-detail.component';



@NgModule({
  declarations: [
    PagesComponent,
    NhanvienListComponent,
    NhanvienDetailComponent,
    NhanvienDialogComponent,
    FilterNVPipe,
    UserListComponent,
    UserDialogComponent,
    ImgListComponent,
    UploadImgBTComponent,
    UserResetPasswordComponent,
    BenhListComponent,
    ThuocListComponent,
    BenhDetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NzButtonModule

  ],
  providers: [],
  entryComponents: [
    NhanvienDetailComponent,
    NhanvienDialogComponent,
    UploadImgBTComponent,
    UserDialogComponent,
    BenhDetailComponent,
    UserResetPasswordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
