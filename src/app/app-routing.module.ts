import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { LienheComponent } from './trangchu/lienhe/lienhe.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchuModule } from './trangchu/trangchu.module';


// const appRoutes: Routes = [
//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: '/trangchu',
//         pathMatch: 'full'
//       },
//       {
//         path: 'admin',
//         // loadChildren: './dashboard/dashboard.module#DashboardModule',
//         loadChildren: () => PagesModule,
//         data: {
//           breadcrumb: 'admin'
//         }
//       },
//       // {
//       //   path: 'trangchu',
//       //   // loadChildren: './dashboard/dashboard.module#DashboardModule',
//       //   loadChildren: () => TrangchuModule,
//       //   data: {
//       //     breadcrumb: 'trangchu'
//       //   }
//       // },
//       { path: 'login', component: LoginComponent }
//     ]
//   }
// ];
const appRoutes: Routes = [
  { path: '',   redirectTo: '/trangchu', pathMatch: 'full' },
  // This component defines the shared main content around a router outlet.
  { 
    path: 'trangchu', component: TrangchuComponent, children: [
    ]
  },
  // This component defines the shared admin content around a router outlet.
  { path: 'admin', component: PagesComponent, children: [
    ]
  },
  { path: 'login', component: LoginComponent },
 ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
