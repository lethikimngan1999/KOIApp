import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';
import { HinhanhService } from 'src/app/shared/services/hinhanh.service';

@Component({
  selector: 'app-sanpham-of-chungloai',
  templateUrl: './sanpham-of-chungloai.component.html',
  styleUrls: ['./sanpham-of-chungloai.component.css']
})
export class SanphamOfChungloaiComponent implements OnInit {
  dataSource: any = [];
  dataChungLoai: any = [];
  Search = '';
  sName: string = '';

  selected: any = [];
  has: any = false;

  //sName: string = '';
 
  constructor( public bientheService: BientheService,
               public chungloaiService: ChungloaiService,
               public hinhanhService: HinhanhService,
               private message: NzMessageService,
               public router: Router,
               public activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.loadListChungLoai();
    this.activatedRoute.queryParams.subscribe(params => {
      this.loadList(params.machungloai);
    });
  }

  // onFilter() {
  //   this.Search = this.TenBienThe;
  // }

   // get danh sach 
   public loadList(machungloai: string) {
    this.bientheService.GetListOfChungLoai(machungloai).subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        //this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

  
   // get danh sach 
   public loadListChungLoai(): any {
    this.chungloaiService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataChungLoai = response.Data;
        //this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }
  
  public viewChungLoai(machungloai: any) {
    this.navigateChungLoai(machungloai);
  }

  private navigateChungLoai(machungloai: any) {
    if (machungloai) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['trangchu/san-pham/bienthe/'], { queryParams: { machungloai: machungloai } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }
 
  // public getDetail(mabienthe: string) {
  //   this.bientheService.getDetail(mabienthe).subscribe(response => {
  //     if (response.Status === true) {
  //       this.selected = response.Data;
  //       this.has = true;
  //     }
  //     console.log(this.selected);
  //   });
  // }

}
