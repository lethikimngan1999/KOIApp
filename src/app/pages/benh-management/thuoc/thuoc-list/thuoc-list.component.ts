import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ThuocService } from 'src/app/shared/services/thuoc.service';
import { BenhOfthuocDialogComponent } from '../benh-ofthuoc-dialog/benh-ofthuoc-dialog.component';

@Component({
  selector: 'app-thuoc-list',
  templateUrl: './thuoc-list.component.html',
  styleUrls: ['./thuoc-list.component.css']
})
export class ThuocListComponent implements OnInit {
  isConfirmLoading = false;
  pageTitle = 'Danh sách các loại thuốc';
  dataSource: any = [];

  constructor(private thuocService: ThuocService,
    private modalService: NzModalService,) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }
  public loadList(): any {
    this.thuocService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

  
  showModal(data: any) {
    const modalAdd = this.modalService.create({
      nzTitle: 'Thêm bệnh được thuốc điều trị ',
      nzContent: BenhOfthuocDialogComponent,
      nzComponentParams: {
        isShowAdd: true,
        thuocDto: JSON.parse(JSON.stringify(data)),
        maBenhs: JSON.parse(JSON.stringify(data.MaBenhs))
      },
      nzWidth: '600',
    });
    // Return a result when closed
    modalAdd.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

}
