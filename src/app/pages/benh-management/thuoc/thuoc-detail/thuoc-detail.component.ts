import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-thuoc-detail',
  templateUrl: './thuoc-detail.component.html',
  styleUrls: ['./thuoc-detail.component.css']
})
export class ThuocDetailComponent implements OnInit {

   
  pageTitle = 'Chi tiết thuốc';
  selected: any = [];
  hasThuoc: any = false;

  constructor(
    public thuocService: ThuocService,
    public activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
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
}
