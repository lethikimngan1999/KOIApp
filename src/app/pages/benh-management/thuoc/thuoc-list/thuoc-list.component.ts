import { Component, OnInit } from '@angular/core';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-thuoc-list',
  templateUrl: './thuoc-list.component.html',
  styleUrls: ['./thuoc-list.component.css']
})
export class ThuocListComponent implements OnInit {
  isConfirmLoading = false;
  pageTitle = 'Danh sách các loại thuốc';
  dataSource: any = [];

  constructor(private thuocService: ThuocService) { }

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
}
