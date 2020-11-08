import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { BienTheDTO } from 'src/app/models/BienTheDTO';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { BientheDialogComponent } from '../bienthe-dialog/bienthe-dialog.component';

interface DataItem {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-bienthe-list',
  templateUrl: './bienthe-list.component.html',
  styleUrls: ['./bienthe-list.component.css']
})
export class BientheListComponent implements OnInit {

  searchValue = '';
  visible = false;

  pageTitle = 'Danh sách biến thể';
  dataSource: any = [];
  isConfirmLoading = false;

  constructor(public bienTheService: BientheService,
              private modalService: NzModalService) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.dataSource = this.dataSource.filter((item: BienTheDTO) => item.TenBienThe.indexOf(this.searchValue) !== -1);
  }


  // get danh sach nhan vien
  public loadList(): any {
    this.bienTheService.getListAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }


  create(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm biến thể',
      nzContent: BientheDialogComponent,
      nzComponentParams: {
        isAdd: true,
        bientheDto: new BienTheDTO()
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  edit(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chinh sửa thông tin biến thể',
      nzContent: BientheDialogComponent,
      nzComponentParams: {
        bientheDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
}
