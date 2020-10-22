import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BenhService } from 'src/app/shared/services/benh.service';

@Component({
  selector: 'app-benh-detail',
  templateUrl: './benh-detail.component.html',
  styleUrls: ['./benh-detail.component.css']
})
export class BenhDetailComponent implements OnInit {


  
  pageTitle = 'Chi tiết bệnh';
  selected: any = [];
  hasBenh: any = false;

  constructor(
    public benhService: BenhService,
    public activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.mabenh);
    });
  }
  public getDetail(mabenh: string) {
    this.benhService.getDetail(mabenh).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.hasBenh = true;
      }
      console.log(this.selected);
    });
  }
}
