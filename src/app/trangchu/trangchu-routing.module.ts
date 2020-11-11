import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu.component';
import { Routes, RouterModule } from '@angular/router';
import { LienheComponent } from './lienhe/lienhe.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SanphamComponent } from './sanpham/sanpham.component';


const routes: Routes = [
  {
    path: 'trangchu',
    component: TrangchuComponent,
    children: [
      {
        path: 'lienhe',
        component: LienheComponent
      },
      {
        path: 'san-pham/chitiet',
        component: ProductDetailComponent
      },
      {
        path: 'san-pham',
        component: SanphamComponent
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
