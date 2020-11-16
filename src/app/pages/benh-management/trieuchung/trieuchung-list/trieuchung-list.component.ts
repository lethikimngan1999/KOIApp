import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';
import { TrieuchungDialogComponent } from '../trieuchung-dialog/trieuchung-dialog.component';
import { TrieuchungbenhDialogComponent } from '../trieuchungbenh-dialog/trieuchungbenh-dialog.component';

@Component({
  selector: 'app-trieuchung-list',
  templateUrl: './trieuchung-list.component.html',
  styleUrls: ['./trieuchung-list.component.css']
})
export class TrieuchungListComponent implements OnInit {

  pageTitle = 'Danh sách các triệu chứng';
  dataSource: any = [];
  isConfirmLoading = false;

  constructor( private modalService: NzModalService,
    private trieuchungService: TrieuchungService,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }
  public loadList(): any {
    this.trieuchungService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }

  createTrieuChung(): void {
    const modalCreate = this.modalService.create({
      nzTitle: 'Thêm triệu chứng',
      nzContent: TrieuchungDialogComponent,
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

  editTrieuChung(data: any) {
    const modalEdit = this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin ',
      nzContent: TrieuchungDialogComponent,
      nzComponentParams: {
        trieuchungDto: JSON.parse(JSON.stringify(data))
      },
      nzWidth: '500',
    });
    // Return a result when closed
    modalEdit.afterClose.subscribe(() => {
      return this.ngOnInit();
    });
  }

  
// xem chi tiết 
public viewBenh(mabenh: any) {
  this.navigateDetailBenh(mabenh);
}

private navigateDetailBenh(mabenh: any) {
  if (mabenh) {
    // chuyen sang màn hình chi tiết 
    this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
  } else {
    this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
  }
}

showModal(data: any) {
  const modalAdd = this.modalService.create({
    nzTitle: 'Thêm bệnh có triệu chứng ',
    nzContent: TrieuchungbenhDialogComponent,
    nzComponentParams: {
      isShowAdd: true,
      trieuchungDto: JSON.parse(JSON.stringify(data)),
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
