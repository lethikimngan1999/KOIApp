import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { HinhAnhBienTheDTO } from 'src/app/models/HinhAnhBienTheDTO';
import { HinhanhService } from 'src/app/shared/services/hinhanh.service';
import { UploadImgBTComponent } from '../upload-img-bt/upload-img-bt.component';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  dataSource: any = [];
  constructor(
    private modalService: NzModalService,
    private hinhanhService: HinhanhService
  ) { }

  ngOnInit(): void {
    this.loadist();
  }

  
  // get danh sach nhan vien
  public loadist(): any {
    this.hinhanhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
       // this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }

  createNhanVien(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm nhân viên',
      nzContent: UploadImgBTComponent,
      nzComponentParams: {
        isAdd: true,
        hinhanhDto: new HinhAnhBienTheDTO()
      },
      nzWidth: '800',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }


}
