import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu.component';
import { Routes, RouterModule } from '@angular/router';
import { LienheComponent } from './lienhe/lienhe.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { SanphamOfChungloaiComponent } from './sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component';
import { BenhListComponent } from './benh/benh-list/benh-list.component';
import { IndexComponent } from './index/index.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { TracuubenhComponent } from './benh/tracuubenh/tracuubenh.component';
import { ThuocDetailComponent } from './thuoc/thuoc-detail/thuoc-detail.component';
import { ThuocListKhComponent } from './thuoc/thuoc-list-kh/thuoc-list-kh.component';
import { BenhDetailtKhComponent } from './benh/benh-detailt-kh/benh-detailt-kh.component';
import { ThongtinListComponent } from './thongtin/thongtin-list/thongtin-list.component';
import { LoginkhComponent } from './loginkh/loginkh.component';


const routes: Routes = [
  {
    path: 'trangchu',
    component: TrangchuComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'dang-nhap',
        component: LoginkhComponent
      },
      {
        path: 'gioi-thieu',
        component: GioithieuComponent
      },
      {
        path: 'lienhe',
        component: LienheComponent
      },
      {
        path: 'thongtin',
        component: ThongtinListComponent
      },
      // {
      //   path: 'san-pham/chitiet',
      //   component: ProductDetailComponent
      // },
      {
        path: 'san-pham/bienthe',
        component: SanphamOfChungloaiComponent
      },
      {
        path: 'san-pham',
        component: SanphamComponent
      },
      {
        path: 'cac-loai-benh',
        component: BenhListComponent
      },
      {
        path: 'cac-loai-benh/chitiet',
        component: BenhDetailtKhComponent
      },
      {
        path: 'tra-cuu-benh',
        component: TracuubenhComponent
      },
      {
        path: 'cac-loai-thuoc',
        component: ThuocListKhComponent
      },
      {
        path: 'cac-loai-thuoc/chi-tiet-thuoc',
        component: ThuocDetailComponent
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
export class TrangchuRoutingModule { }
