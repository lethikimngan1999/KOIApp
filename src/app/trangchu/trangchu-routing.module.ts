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
        path: 'lienhe',
        component: LienheComponent
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
