import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { HinhanhService } from 'src/app/shared/services/hinhanh.service';
import { ChungloaiService } from '../../shared/services/chungloai.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {

  dataSource: any = [];
  dataChungLoai: any = [];
  Search = '';
  sName = '';
  // sName: string = '';

  constructor(public bientheService: BientheService,
    public chungloaiService: ChungloaiService,
    public hinhanhService: HinhanhService,
    private message: NzMessageService,
    public router: Router,
    private modalService: NzModalService,) { }

  ngOnInit(): void {
    this.loadList();
    this.loadListChungLoai();
  }

  // onFilter() {
  //   this.Search = this.TenBienThe;
  // }

  // get danh sach
  public loadList(): any {
    this.bientheService.getListAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        // this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }


  // get danh sach
  public loadListChungLoai(): any {
    this.chungloaiService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataChungLoai = response.Data;
        // this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }

  //  // xem chi tiết nhân viên
  public view(mabienthe: any) {
    this.navigateDetail(mabienthe);
  }

  private navigateDetail(mabienthe: any) {
    if (mabienthe) {
      // chuyen sang màn hình chi tiết nhan vien
      const modalAdd = this.modalService.create({

        nzContent: ProductDetailComponent,
        nzComponentParams: {

          mabienthe: JSON.parse(JSON.stringify(mabienthe)),
          //    //   maThuocs: JSON.parse(JSON.stringify(data.MaThuocs))
        },
        nzWidth: '1200',
      });
      // Return a result when closed
      modalAdd.afterClose.subscribe(() => {
        return this.ngOnInit();
      });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  // showModal(data: any) {
  //   const modalAdd = this.modalService.create({
  //     nzTitle: 'Thêm thuốc điều trị cho bệnh ',
  //     nzContent: ProductDetailComponent,
  //     nzComponentParams: {

  //       bientheDto: JSON.parse(JSON.stringify(data)),
  //    //   maThuocs: JSON.parse(JSON.stringify(data.MaThuocs))
  //     },
  //     nzWidth: '1200',
  //   });
  //   // Return a result when closed
  //   modalAdd.afterClose.subscribe(() => {
  //     return this.ngOnInit();
  //   });
  // }


  public viewChungLoai(machungloai: any) {
    this.navigateChungLoai(machungloai);
  }

  private navigateChungLoai(machungloai: any) {
    if (machungloai) {
      // chuyen sang màn hình chi tiết nhan vien
      this.router.navigate(['trangchu/san-pham/bienthe/'], { queryParams: { machungloai } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }
}
