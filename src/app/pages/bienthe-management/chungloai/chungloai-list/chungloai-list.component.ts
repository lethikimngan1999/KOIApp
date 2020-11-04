import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { ChungLoaiDTO } from 'src/app/models/ChungLoaiDTO';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';
import { ChungloaiDialogComponent } from '../chungloai-dialog/chungloai-dialog.component';

@Component({
  selector: 'app-chungloai-list',
  templateUrl: './chungloai-list.component.html',
  styleUrls: ['./chungloai-list.component.css']
})
export class ChungloaiListComponent implements OnInit {

  pageTitle = 'Danh sách chủng loại';
  dataSource: any = [];
  isConfirmLoading = false;
  sName: string = '';
  constructor(public chungloaiService: ChungloaiService,
              public router: Router,
              private message: NzMessageService,
              private modalService: NzModalService
              ) { }

ngOnInit() {
    this.isConfirmLoading = true;
    this.loadList();
  }

  // get danh sach 
  public loadList(): any {
    this.chungloaiService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

  // xem chi tiết 
  public view(machungloai: any) {
    this.navigateDetail(machungloai);
  }

  private navigateDetail(machungloai: any) {
    if (machungloai) {
      // chuyen sang màn hình chi tiết 
      this.router.navigate(['admin/chung-loai/chitiet/'], { queryParams: { machungloai: machungloai } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  create(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm chủng loại',
      nzContent: ChungloaiDialogComponent,
      nzComponentParams: {
        isAdd: true,
        chungloaiDto: new ChungLoaiDTO()
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
      nzTitle: 'Chinh sửa thông tin chủng loại',
      nzContent: ChungloaiDialogComponent,
      nzComponentParams: {
        chungloaiDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

}
