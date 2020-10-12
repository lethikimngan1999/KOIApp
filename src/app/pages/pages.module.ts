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
import { UserDialogComponent } from './account-management/users/user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    PagesComponent,
    NhanvienListComponent,
    NhanvienDetailComponent,
    NhanvienDialogComponent,
    UserListComponent,
    UserDialogComponent],
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
