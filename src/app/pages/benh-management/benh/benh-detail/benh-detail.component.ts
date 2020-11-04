import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { LieuTrinhDTO } from 'src/app/models/LieuTrinhDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { BenhDialogComponent } from '../benh-dialog/benh-dialog.component';
import { LieutrinhDialogComponent } from '../lieutrinh-dialog/lieutrinh-dialog.component';
import { TrieuchungDialogComponent } from '../trieuchung-dialog/trieuchung-dialog.component';

@Component({
  selector: 'app-benh-detail',
  templateUrl: './benh-detail.component.html',
  styleUrls: ['./benh-detail.component.css']
})
export class BenhDetailComponent implements OnInit {


  
  pageTitle = 'Chi tiết bệnh';
  selected: any = [];
  hasBenh: any = false;
  hasLieuTrinh: any = false;
  constructor(
    public benhService: BenhService,
    public activatedRoute: ActivatedRoute,
    private modalService: NzModalService,
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

  createTrieuChung(data: any): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm triệu chứng',
      nzContent: TrieuchungDialogComponent,
      nzComponentParams: {
        isAddtt: true,
        trieuchungDto: JSON.parse(JSON.stringify(data))
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

  editTrieuChung(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin ',
      nzContent: TrieuchungDialogComponent,
      nzComponentParams: {
        trieuchungDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '1000',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

}
