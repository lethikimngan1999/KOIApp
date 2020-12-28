import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienheComponent } from './lienhe/lienhe.component';
import { TrangchuRoutingModule } from './trangchu-routing.module';
import { TrangchuComponent } from './trangchu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SanphamOfChungloaiComponent } from './sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component';
import { BenhListComponent } from './benh/benh-list/benh-list.component';
import { IndexComponent } from './index/index.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { TracuubenhComponent } from './benh/tracuubenh/tracuubenh.component';
import { ThuocDetailComponent } from './thuoc/thuoc-detail/thuoc-detail.component';
import { ThuocListKhComponent } from './thuoc/thuoc-list-kh/thuoc-list-kh.component';
import { BenhDetailtKhComponent } from './benh/benh-detailt-kh/benh-detailt-kh.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { ThongtinListComponent } from './thongtin/thongtin-list/thongtin-list.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ThongtinDialogComponent } from './thongtin/thongtin-dialog/thongtin-dialog.component';
import { LoginkhComponent } from './loginkh/loginkh.component';
import { CustomerChangepassComponent } from './customer-changepass/customer-changepass.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LienheComponent,
    TrangchuComponent,
    FilterPipe,
    ProductDetailComponent,
    SanphamComponent,
    SanphamOfChungloaiComponent,
    BenhListComponent,
    IndexComponent,
    GioithieuComponent,
    TracuubenhComponent,
    ThuocDetailComponent,
    ThuocListKhComponent,
    BenhDetailtKhComponent,
    RegisterDialogComponent,
    ThongtinListComponent,
    ThongtinDialogComponent,
    LoginkhComponent,
    CustomerChangepassComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrangchuRoutingModule,
    NgZorroAntdModule,
    CKEditorModule,
    RouterModule
  ],
  entryComponents: [
    ProductDetailComponent,
    RegisterDialogComponent,
    ThongtinDialogComponent,
    CustomerChangepassComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangchuModule { }
