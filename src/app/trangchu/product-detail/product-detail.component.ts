import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BienTheDTO } from 'src/app/models/BienTheDTO';
import { BientheService } from 'src/app/shared/services/bienthe.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selected: any = [];
  has: any = false;
  @Input() mabienthe: any;
  
  constructor(private bientheService: BientheService,
    public activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.getDetail(params.mabienthe);
    // });
    this.getDetail(this.mabienthe);
  }
  public getDetail(mabienthe: string) {
    this.bientheService.getDetail(mabienthe).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
       // this.has = true;
      }
      //console.log(this.selected);
    });
  }

  //  link = document.querySelectorAll('li a');
  // let imgBox = document.querySelector('.imgBox>img');

  // link.forEach(el => {
  //     el.addEventListener('mouseover', (e) => imgBox.src = el.href);
  // });

  // private getThuocs(): any {
  //   this.thuocService.getAll().subscribe(response => {
  //     if (response && response.Status) {
  //       this.listThuoc = JSON.parse(JSON.stringify(response.Data));
  //       this.modelRoleModal = JSON.parse(JSON.stringify(response.Data));
  //     }
  //   });
  // }
}
