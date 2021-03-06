import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from '../app.component';
import { UserListComponent } from './account-management/users/user-list/user-list.component';
import { BenhDetailComponent } from './benh-management/benh/benh-detail/benh-detail.component';
import { BenhListComponent } from './benh-management/benh/benh-list/benh-list.component';
import { ThuocDetailComponent } from './benh-management/thuoc/thuoc-detail/thuoc-detail.component';
import { ThuocListComponent } from './benh-management/thuoc/thuoc-list/thuoc-list.component';
import { TrieuchungListComponent } from './benh-management/trieuchung/trieuchung-list/trieuchung-list.component';
import { TrieuchungbenhComponent } from './benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component';
import { BientheDetailComponent } from './bienthe-management/bienthe/bienthe-detail/bienthe-detail.component';
import { BientheListComponent } from './bienthe-management/bienthe/bienthe-list/bienthe-list.component';

import { ChungloaiDetailComponent } from './bienthe-management/chungloai/chungloai-detail/chungloai-detail.component';
import { ChungloaiListComponent } from './bienthe-management/chungloai/chungloai-list/chungloai-list.component';
import { ImgListComponent } from './image-management/img-bienthe/img-list/img-list.component';
import { LoginComponent } from './login/login.component';
import { NhanvienDetailComponent } from './nhanvien-management/nhanvien-detail/nhanvien-detail.component';
import { NhanvienListComponent } from './nhanvien-management/nhanvien-list/nhanvien-list.component';

import { PagesComponent } from './pages.component';
import { PagesModule } from './pages.module';
import { ThongkeComponent } from './thongke/thongke.component';


const routes: Routes = [
  {
    path: 'admin',
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
        path: 'cac-loai-benh',
        component: BenhListComponent
      },
      {
        path: 'cac-loai-thuoc',
        component: ThuocListComponent
      },
      {
        path: 'trieu-chung',
        component: TrieuchungListComponent
      },
      {
        path: 'trieu-chung-benh',
        component: TrieuchungbenhComponent
      },
      {
        path: 'imgBT-management',
        component: ImgListComponent
      },
      {
        path: 'cac-loai-benh/chitiet',
        component: BenhDetailComponent
      },
      {
        path: 'cac-loai-thuoc/chitiet',
        component: ThuocDetailComponent
      },
      {
        path: 'chung-loai',
        component: ChungloaiListComponent
      },
      {
        path: 'chung-loai/chitiet',
        component: ChungloaiDetailComponent
      },
      {
        path: 'bien-the',
        component: BientheListComponent
      },
      {
        path: 'bien-the/chitiet',
        component: BientheDetailComponent
      },
      {
        path: 'thong-ke',
        component: ThongkeComponent
      },
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
