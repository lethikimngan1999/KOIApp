import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { NhanvienService } from 'src/app/shared/services/nhanvien.service';
import { NhanvienDialogComponent } from '../nhanvien-dialog/nhanvien-dialog.component';

const userList = ['User', 'Admin', 'Accounter', 'Admin1'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'app-nhanvien-detail',
  templateUrl: './nhanvien-detail.component.html',
  styleUrls: ['./nhanvien-detail.component.css']
})


export class NhanvienDetailComponent implements OnInit {

  pageTitle = 'Chi tiết nhân viên';
  selectedNhanvien: any = [];
  hasNhanvien: any = false;

  text: string = userList[3];
  color: string = colorList[3];

  constructor(
    public nhanvienService: NhanvienService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.manhanvien);
    });
  }
  public getDetail(manhanvien: string) {
    this.nhanvienService.getDetail(manhanvien).subscribe(response => {
      if (response.Status === true) {
        this.selectedNhanvien = response.Data;
        this.hasNhanvien = true;
      }
      console.log(this.selectedNhanvien);
    });
  }


  change(): void {
    let idx = userList.indexOf(this.text);
    ++idx;
    if (idx === userList.length) {
      idx = 0;
    }
    this.text = userList[idx];
    this.color = colorList[idx];
  }

  edit(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chinh sửa nhân viên',
      nzContent: NhanvienDialogComponent,
      nzComponentParams: {
        nhanvienDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '800',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

}
