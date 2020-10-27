import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';

@Component({
  selector: 'app-chungloai-detail',
  templateUrl: './chungloai-detail.component.html',
  styleUrls: ['./chungloai-detail.component.css']
})
export class ChungloaiDetailComponent implements OnInit {

  pageTitle = 'Chi tiết ';
  selected: any = [];
  has: any = false;


  constructor(
    public chungloaiService: ChungloaiService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.machungloai);
    });
  }
  public getDetail(machungloai: string) {
    this.chungloaiService.getDetail(machungloai).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.has = true;
      }
      console.log(this.selected);
    });
  }

}
