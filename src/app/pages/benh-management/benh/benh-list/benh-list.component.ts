import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhService } from 'src/app/shared/services/benh.service';

@Component({
  selector: 'app-benh-list',
  templateUrl: './benh-list.component.html',
  styleUrls: ['./benh-list.component.css']
})
export class BenhListComponent implements OnInit {

  isConfirmLoading = false;
  pageTitle = 'Danh sách các loại bệnh';
  dataSource: any = [];

  constructor(private benhService: BenhService,
              private message: NzMessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }
  public loadList(): any {
    this.benhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }


  
  // xem chi tiết nhân viên
  public view(mabenh: any) {
    this.navigateDetail(mabenh);
  }

  private navigateDetail(mabenh: any) {
    if (mabenh) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

}
