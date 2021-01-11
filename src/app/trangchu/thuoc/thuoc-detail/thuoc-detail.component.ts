import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhachhangService } from 'src/app/shared/services/khachhang.service';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-thuoc-detail',
  templateUrl: './thuoc-detail.component.html',
  styleUrls: ['./thuoc-detail.component.css']
})
export class ThuocDetailComponent implements OnInit {

  pageTitle = 'Thông tin chi tiết';
  selected: any = [];
  hasThuoc: any = false;
  dataPoints1: any = [];
  
  month: string;
  year: string;

  constructor(
    public thuocService: ThuocService,
    public activatedRoute: ActivatedRoute,
    public khachhangService: KhachhangService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.mathuoc);
    });
  }
  public getDetail(mathuoc: string) {
    this.thuocService.getDetail(mathuoc).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.hasThuoc = true;
      }
      console.log(this.selected);
    });
  }

  submitForm() {
    const now = new Date();

    this.update(now.getMonth() + 1, now.getFullYear());
  }

  public update(month: any, year: any) {
   
    const data1 = { month, year };
    this.khachhangService.thongke(data1).subscribe(response => {
      if (response && response.Status) {
        this.dataPoints1 = response.Data;

      }
    });
  }
}
