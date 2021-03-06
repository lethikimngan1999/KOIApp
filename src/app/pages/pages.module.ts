import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
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
import { UserRoleDialogComponent } from './account-management/users/user-role-dialog/user-role-dialog.component';
import { ThuocOfbenhDialogComponent } from './benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component';
import { BenhOfthuocDialogComponent } from './benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component';

import { BenhDialogComponent } from './benh-management/benh/benh-dialog/benh-dialog.component';
import { ChungloaiListComponent } from './bienthe-management/chungloai/chungloai-list/chungloai-list.component';
import { ChungloaiDialogComponent } from './bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component';
import { ChungloaiDetailComponent } from './bienthe-management/chungloai/chungloai-detail/chungloai-detail.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ThuocDialogComponent } from './benh-management/thuoc/thuoc-dialog/thuoc-dialog.component';
import { ThuocDetailComponent } from './benh-management/thuoc/thuoc-detail/thuoc-detail.component';
import { FilterChungLoaiPipe } from '../pipes/filter-chung-loai.pipe';
import { FilterBenhPipe } from '../pipes/filter-benh.pipe';
import { FilterThuocPipe } from '../pipes/filter-thuoc.pipe';



import { SortPipe } from '../pipes/sort.pipe';
import { BientheListComponent } from './bienthe-management/bienthe/bienthe-list/bienthe-list.component';
import { BientheDialogComponent } from './bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component';
import { UploadDialogComponent } from './bienthe-management/bienthe/upload-dialog/upload-dialog.component';
import { BientheDetailComponent } from './bienthe-management/bienthe/bienthe-detail/bienthe-detail.component';
import { TrieuchungListComponent } from './benh-management/trieuchung/trieuchung-list/trieuchung-list.component';
import { TrieuchungbenhDialogComponent } from './benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component';
import { TrieuchungDialogComponent } from './benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component';
import { TrieuchungOfBenhComponent } from './benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component';
import { LieutrinhDialogComponent } from './benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component';
import { TrieuchungbenhComponent } from './benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component';
import { FilterTrieuchungbenhPipe } from '../pipes/filter-trieuchungbenh.pipe';
import { NewTrieuChungComponent } from './benh-management/benh/new-trieu-chung/new-trieu-chung.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    PagesComponent,
    NhanvienListComponent,
    NhanvienDetailComponent,
    NhanvienDialogComponent,
    FilterNVPipe,
    FilterChungLoaiPipe,
    FilterBenhPipe,
    FilterThuocPipe,
    FilterTrieuchungbenhPipe,
    SortPipe,
    UserListComponent,
    UserDialogComponent,
    ImgListComponent,
    UploadImgBTComponent,
    UserResetPasswordComponent,
    BenhListComponent,
    ThuocListComponent,
    BenhDetailComponent,
    UserRoleDialogComponent,
    ThuocOfbenhDialogComponent,
    BenhOfthuocDialogComponent,
    BenhDialogComponent,
    ChungloaiListComponent,
    ChungloaiDialogComponent,
    ChungloaiDetailComponent,
    ThuocDialogComponent,
    ThuocDetailComponent,
    LieutrinhDialogComponent,
    TrieuchungDialogComponent,
    BientheListComponent,
    BientheDialogComponent,
    UploadDialogComponent,
    BientheDetailComponent,
    TrieuchungListComponent,
    TrieuchungbenhDialogComponent,
    TrieuchungOfBenhComponent,
    TrieuchungbenhComponent,
    NewTrieuChungComponent,
    ThongkeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NzButtonModule,
    CKEditorModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  entryComponents: [
    NhanvienDetailComponent,
    BientheDetailComponent,
    NhanvienDialogComponent,
    UploadImgBTComponent,
    UserDialogComponent,
    UserRoleDialogComponent,
    BenhDetailComponent,
    BenhDialogComponent,
    ThuocDetailComponent,
    ThuocDialogComponent,
    LieutrinhDialogComponent,
    TrieuchungDialogComponent,
    ChungloaiDialogComponent,
    ChungloaiDetailComponent,
    ThuocOfbenhDialogComponent,
    BenhOfthuocDialogComponent,
    BientheDialogComponent,
    UploadDialogComponent,
    UserResetPasswordComponent,
    TrieuchungbenhDialogComponent,
    TrieuchungOfBenhComponent,
    NewTrieuChungComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
