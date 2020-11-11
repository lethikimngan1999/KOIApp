import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BientheService } from 'src/app/shared/services/bienthe.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selected: any = [];
  has: any = false;

  constructor(private bientheService: BientheService,
    public activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.mabienthe);
    });
  }
  public getDetail(mabienthe: string) {
    this.bientheService.getDetail(mabienthe).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.has = true;
      }
      console.log(this.selected);
    });
  }

}
