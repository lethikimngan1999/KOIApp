import { Component, OnInit } from '@angular/core';
import * as CONFIG from './../app.config';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pageTitle = CONFIG.SITENAME;
  year: number = new Date().getFullYear();
  pageFooter = CONFIG.SITENAME + ' ©' + this.year;
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
