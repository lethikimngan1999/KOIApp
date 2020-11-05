import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienheComponent } from './lienhe/lienhe.component';
import { TrangchuRoutingModule } from './trangchu-routing.module';
import { TrangchuComponent } from './trangchu.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [LienheComponent, TrangchuComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    TrangchuRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangchuModule { }
