import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BientheService } from '../shared/services/bienthe.service';
import { HinhanhService } from '../shared/services/hinhanh.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  dataSource: any = [];
  Search = '';
  sName: string = '';
  //sName: string = '';
 
  constructor( public bientheService: BientheService,
    public hinhanhService: HinhanhService,
    public router: Router,) { }

  ngOnInit(): void {
    this.loadList();
  }

  // onFilter() {
  //   this.Search = this.TenBienThe;
  // }

   // get danh sach 
   public loadList(): any {
    this.bientheService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        //this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

}
