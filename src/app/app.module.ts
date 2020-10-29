import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { DashboardModule } from './dashboard/dashboard.module';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NhanvienService } from './shared/services/nhanvien.service';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchuModule } from './trangchu/trangchu.module';
import { CKEditorModule } from 'ckeditor4-angular';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgZorroAntdModule,
    CKEditorModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    TrangchuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
  NhanvienService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
