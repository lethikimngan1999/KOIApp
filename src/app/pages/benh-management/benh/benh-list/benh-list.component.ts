import { Component, OnInit } from '@angular/core';
import { BenhService } from 'src/app/shared/services/benh.service';

@Component({
  selector: 'app-benh-list',
  templateUrl: './benh-list.component.html',
  styleUrls: ['./benh-list.component.css']
})
export class BenhListComponent implements OnInit {

  isConfirmLoading = false;
  pageTitle = 'Danh sách các loại bệnh';
  dataSource: any = [];

  constructor(private benhService: BenhService) { }

  ngOnInit(): void {
    this.isConfirmLoading = true;
    this.loadList();
  }
  public loadList(): any {
    this.benhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        this.isConfirmLoading = false;
       // console.log(this.dataSource);
      }
    });
  }
}
