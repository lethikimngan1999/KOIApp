import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienheComponent } from './lienhe/lienhe.component';
import { TrangchuRoutingModule } from './trangchu-routing.module';
import { TrangchuComponent } from './trangchu.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SanphamOfChungloaiComponent } from './sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component';




@NgModule({
  declarations: [LienheComponent, TrangchuComponent, FilterPipe, ProductDetailComponent, SanphamComponent, SanphamOfChungloaiComponent],
  imports: [
    CommonModule,
    FormsModule,
    TrangchuRoutingModule,
    NgZorroAntdModule
  ],
  entryComponents: [
    ProductDetailComponent
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangchuModule { }
