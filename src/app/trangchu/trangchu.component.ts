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
  
  constructor( public bientheService: BientheService,
    public hinhanhService: HinhanhService,
    public router: Router,) { }

  ngOnInit(): void {
    this.loadList();
  }

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
