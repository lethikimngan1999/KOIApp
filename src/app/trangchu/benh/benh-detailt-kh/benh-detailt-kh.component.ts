import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService, NzModalService, NzTabPosition } from 'ng-zorro-antd';
import { BenhService } from 'src/app/shared/services/benh.service';
import { LieutrinhService } from 'src/app/shared/services/lieutrinh.service';
import { ThuocService } from 'src/app/shared/services/thuoc.service';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

@Component({
  selector: 'app-benh-detailt-kh',
  templateUrl: './benh-detailt-kh.component.html',
  styleUrls: ['./benh-detailt-kh.component.css']
})
export class BenhDetailtKhComponent implements OnInit {

  pageTitle = 'Thông tin chi tiết ';
  selected: any = [];
  selectedThuoc: any = [];
  hasBenh: any = false;
  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'left';
  selectedIndex = 0;
  constructor(
    public benhService: BenhService,
    public lieutrinhService: LieutrinhService,
    public trieuchungService: TrieuchungService,
    public activatedRoute: ActivatedRoute,
    public thuocService: ThuocService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.mabenh);
    });
    //console.log("Test");
  }
  public getDetail(mabenh: string) {
    this.benhService.getDetail(mabenh).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.hasBenh = true;
      }
      console.log(this.selected.ListThuocs);
     // this.viewLT(this.selected.ListThuocs.shift().MaThuoc);
      console.log("selected.ListThuocs");
    });
   
  }

    // xem chi tiết
    public viewLT(mathuoc: any) {
      // const param: any = { mathuoc };
       this.thuocService.getDetail(mathuoc).subscribe(response => {
         if (response.Status === true) {
           this.selectedThuoc = response.Data;
         //  this.hasThuoc = true;
         }
         
       });
     }
}
