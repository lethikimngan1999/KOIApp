import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from './pages/pages.module';
import { LienheComponent } from './trangchu/lienhe/lienhe.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchuModule } from './trangchu/trangchu.module';


const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        // loadChildren: './dashboard/dashboard.module#DashboardModule',
        loadChildren: () => PagesModule,
        data: {
          breadcrumb: 'Home'
        }
      },
      // {
      //   path: 'trangchu',
      //   // loadChildren: './dashboard/dashboard.module#DashboardModule',
      //   loadChildren: () => TrangchuModule,
      //   data: {
      //     breadcrumb: 'Trangchu'
      //   }
      // }
    ]
  },
  {
    path: 'trangchu',
    component: TrangchuComponent,
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
