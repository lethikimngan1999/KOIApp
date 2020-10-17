import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienheComponent } from './lienhe/lienhe.component';
import { TrangchuRoutingModule } from './trangchu-routing.module';
import { TrangchuComponent } from './trangchu.component';



@NgModule({
  declarations: [LienheComponent, TrangchuComponent],
  imports: [
    CommonModule,
    TrangchuRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangchuModule { }
