import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { HinhAnhBienTheDTO } from 'src/app/models/HinhAnhBienTheDTO';
import { UploadImgBTComponent } from '../upload-img-bt/upload-img-bt.component';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  constructor(
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
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
