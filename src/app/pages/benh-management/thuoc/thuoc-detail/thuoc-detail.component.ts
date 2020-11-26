import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { ThuocService } from 'src/app/shared/services/thuoc.service';
import { LieutrinhDialogComponent } from '../lieutrinh-dialog/lieutrinh-dialog.component';

import { ThuocDialogComponent } from '../thuoc-dialog/thuoc-dialog.component';

@Component({
  selector: 'app-thuoc-detail',
  templateUrl: './thuoc-detail.component.html',
  styleUrls: ['./thuoc-detail.component.css']
})
export class ThuocDetailComponent implements OnInit {


  pageTitle = 'Thông tin chi tiết';
  selected: any = [];
  hasThuoc: any = false;

  constructor(
    public thuocService: ThuocService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.mathuoc);
    });
  }
  public getDetail(mathuoc: string) {
    this.thuocService.getDetail(mathuoc).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.hasThuoc = true;
      }
      console.log(this.selected);
    });
  }

    createLieuTrinh(data: any): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm liệu trình',
      nzContent: LieutrinhDialogComponent,
      nzComponentParams: {
        isAddlt: true,
        lieutrinhDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

 editLieuTrinh(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin ',
      nzContent: LieutrinhDialogComponent,
      nzComponentParams: {
        lieutrinhDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
  
  edit(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin ',
      nzContent: ThuocDialogComponent,
      nzComponentParams: {
        thuocDto: JSON.parse(JSON.stringify(data)),
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
}
