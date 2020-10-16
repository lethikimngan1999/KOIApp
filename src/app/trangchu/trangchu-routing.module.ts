import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu.component';
import { Routes, RouterModule } from '@angular/router';
import { LienheComponent } from './lienhe/lienhe.component';


const routes: Routes = [
  {
    path: '',
    component: TrangchuComponent,
    children: [
      {
        path: 'lienhe',
        component: LienheComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TrangchuRoutingModule { }
