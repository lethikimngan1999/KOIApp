import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzModalService, NzTabPosition } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { LieuTrinhDTO } from 'src/app/models/LieuTrinhDTO';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { LieutrinhService } from 'src/app/shared/services/lieutrinh.service';
import { ThuocService } from 'src/app/shared/services/thuoc.service';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

import { BenhDialogComponent } from '../benh-dialog/benh-dialog.component';
import { NewTrieuChungComponent } from '../new-trieu-chung/new-trieu-chung.component';

import { TrieuchungOfBenhComponent } from '../trieuchung-of-benh/trieuchung-of-benh.component';


@Component({
  selector: 'app-benh-detail',
  templateUrl: './benh-detail.component.html',
  styleUrls: ['./benh-detail.component.css']
})
export class BenhDetailComponent implements OnInit {


  nzTabPosition: NzTabPosition = 'left';
  pageTitle = 'Thông tin chi tiết ';
  selected: any = [];
  selectedThuoc: any = [];
  hasBenh: any = false;
  //hasThuoc: any = false;

  constructor(
    public benhService: BenhService,
    public lieutrinhService: LieutrinhService,
    public trieuchungService: TrieuchungService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService,
    private message: NzMessageService,
    public thuocService: ThuocService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getDetail(params.mabenh);
    });
  }
  public getDetail(mabenh: string) {
    this.benhService.getDetail(mabenh).subscribe(response => {
      if (response.Status === true) {
        this.selected = response.Data;
        this.hasBenh = true;
      }
      console.log(this.selected);
    });
  }

  edit(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin ',
      nzContent: BenhDialogComponent,
      nzComponentParams: {
        benhDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }



  create(data: any) {
    const modalCreate = this.modalService.create({
      nzTitle: 'Cập nhật triệu chứng',
      nzContent: TrieuchungOfBenhComponent,
      nzComponentParams: {
        //  isShowAdd: true,
        benhDto: JSON.parse(JSON.stringify(data)),
        maTrieuchungs: JSON.parse(JSON.stringify(data.MaTrieuChungs))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  createTrieuChung(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm triệu chứng',
      nzContent: NewTrieuChungComponent,
      nzComponentParams: {
        isAddtt: true,
        trieuchungDto: new TrieuChungDTO()
      //  trieuchungDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '500',
    });
    // Return a result when closed
    modalCreate.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
 

 // xem chi tiết 
 public viewThuoc(mathuoc: any) {
  this.navigateDetailThuoc(mathuoc);
}

private navigateDetailThuoc(mathuoc: any) {
  if (mathuoc) {
    // chuyen sang màn hình chi tiết 
    this.router.navigate(['admin/cac-loai-thuoc/chitiet/'], { queryParams: { mathuoc: mathuoc } });
  } else {
    this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
  }
}

  // public confirmDeleteLieuTrinh(data: any) {
  //   const modalDelete = this.modalService.confirm({
  //     nzTitle: 'Bạn có chắc chắn xóa liệu trình này?',
  //     nzContent: `<b style='color: red;'> Thông tin:${data.MoTaLieuTrinh} </b>`,
  //     nzOkText: 'Xóa',
  //     nzOkType: 'danger',
  //     nzOnOk: () => this.deleteLieuTrinh(data.MaLieuTrinh),
  //     nzCancelText: 'Hủy',
  //   });
  //   // Return a result when closed
  //   modalDelete.afterClose.subscribe(() => {
  //     return this.ngOnInit();
  //   });
  // }

  /**
  * delete data
  */
  // private deleteLieuTrinh(malieutrinh: any) {
  //   const param: any = { malieutrinh: malieutrinh };
  //   this.lieutrinhService.delete(param).subscribe(response => {
  //     if (response.Status === true) {
  //       this.message.create(TypeMessage.Success, 'Xóa thành công!');

  //     } else {
  //       this.message.create(TypeMessage.Error, 'Xóa không thành công!');
  //     }
  //   });
  //   }

  /**
 * delete data
 */
  private deleteTrieuChung(matrieuchung: any) {
    const param: any = { matrieuchung };
    this.trieuchungService.delete(param).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Xóa thành công!');

      } else {
        this.message.create(TypeMessage.Error, 'Xóa không thành công!');
      }
    });
  }

  public confirmDeleteTrieuChung(data: any) {
    const modalDelete = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn xóa triệu chứng này?',
      nzContent: `<b style='color: red;'> Thông tin:${data.MoTaTrieuChung} </b>`,
      nzOkText: 'Xóa',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteTrieuChung(data.MaTrieuChung),
      nzCancelText: 'Hủy',
    });
    // Return a result when closed
    modalDelete.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }
  // xem chi tiết
  public viewLT(mathuoc: any) {
   // const param: any = { mathuoc };
    this.thuocService.getDetail(mathuoc).subscribe(response => {
      if (response.Status === true) {
        this.selectedThuoc = response.Data;
      //  this.hasThuoc = true;
      }
      console.log(this.selectedThuoc);
    });
  }
}
