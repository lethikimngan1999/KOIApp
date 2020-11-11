import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { BientheService } from 'src/app/shared/services/bienthe.service';

@Component({
  selector: 'app-bienthe-detail',
  templateUrl: './bienthe-detail.component.html',
  styleUrls: ['./bienthe-detail.component.css']
})
export class BientheDetailComponent implements OnInit {
  
  selected: any = [];
  has: any = false;

  constructor(
    public bientheService: BientheService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService) { }

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
