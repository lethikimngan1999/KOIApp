import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-thuoc-list-kh',
  templateUrl: './thuoc-list-kh.component.html',
  styleUrls: ['./thuoc-list-kh.component.css']
})
export class ThuocListKhComponent implements OnInit {

  dataSource: any = [];
  constructor(private thuocService: ThuocService,
              private modalService: NzModalService,
              private message: NzMessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadList();
  }
 // get danh sach
 public loadList(): any {
  this.thuocService.getAll().subscribe(response => {
    if (response && response.Status) {
      this.dataSource = response.Data;

    }
  });
}

 // xem chi tiết
 public view(mathuoc: any) {
  this.navigateDetail(mathuoc);
}

private navigateDetail(mathuoc: any) {
  if (mathuoc) {
    // chuyen sang màn hình chi tiết
    this.router.navigate(['trangchu/cac-loai-thuoc/chi-tiet-thuoc/'], { queryParams: { mathuoc: mathuoc } });
  } else {
    this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
  }
}

}
