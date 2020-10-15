import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from '../app.component';
import { UserListComponent } from './account-management/users/user-list/user-list.component';
import { ImgListComponent } from './image-management/img-bienthe/img-list/img-list.component';
import { LoginComponent } from './login/login.component';
import { NhanvienDetailComponent } from './nhanvien-management/nhanvien-detail/nhanvien-detail.component';
import { NhanvienListComponent } from './nhanvien-management/nhanvien-list/nhanvien-list.component';

import { PagesComponent } from './pages.component';
import { PagesModule } from './pages.module';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'nhanvien-management',
        component: NhanvienListComponent
      },
      {
        path: 'nhanvien-management/detail',
        component: NhanvienDetailComponent
      },
      {
        path: 'users-management',
        component: UserListComponent
 },
 {
  path: 'imgBT-management',
  component: ImgListComponent
}

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  declarations: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})


export class PagesRoutingModule { }
