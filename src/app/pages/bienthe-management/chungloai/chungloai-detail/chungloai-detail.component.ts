import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BienTheDTO } from 'src/app/models/BienTheDTO';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';
import { BientheDialogComponent } from '../../bienthe/bienthe-dialog/bienthe-dialog.component';
import { UploadDialogComponent } from '../../bienthe/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-chungloai-detail',
  templateUrl: './chungloai-detail.component.html',
  styleUrls: ['./chungloai-detail.component.css']
})
export class ChungloaiDetailComponent implements OnInit {

  pageTitle = 'Chi tiết cá Koi ';
  selected: any = [];
  has: any = false;

  dataSource: any = [];
  isConfirmLoading = false;
  
  constructor(
    public chungloaiService: ChungloaiService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService,
    public bienTheService: BientheService,
              public router: Router,
              private message: NzMessageService,
        ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.machungloai);
      this.loadList(params.machungloai);
    });
  }

  public getDetail(machungloai: string) {
    this.chungloaiService.getDetail(machungloai).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.has = true;
      }
      console.log(this.selected);
    });
  }


  // add

  // get danh sach 
  public loadList(machungloai: string) {
    this.bienTheService.GetListOfChungLoai(machungloai).subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.has = true;
        //this.isConfirmLoading = false;
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

  public view(mabienthe: any) {
    this.navigateDetail(mabienthe);
  }

  private navigateDetail(mabienthe: any) {
    if (mabienthe) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['admin/bien-the/chitiet/'], { queryParams: { mabienthe: mabienthe } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  add(data: any) {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm hình ảnh biến thể',
      nzContent: UploadDialogComponent,
      nzComponentParams: {
        isAdd: true,
        hinhanhDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
}
}
