import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhService } from 'src/app/shared/services/benh.service';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

@Component({
  selector: 'app-benh-list',
  templateUrl: './benh-list.component.html',
  styleUrls: ['./benh-list.component.css']
})

export class BenhListComponent implements OnInit {

  form: FormGroup;
  dataSource: any = [];
  dataSourceTT: any = [];
  dataSourceListTT: any = [];
  trieuchungbenh: any[] = [];
  expression = true;

  diableButton = true;

  constructor(private fb: FormBuilder,
              private trieuchungService: TrieuchungService,
              public benhService: BenhService,
              private message: NzMessageService,
              private router: Router ) { }

  ngOnInit(): void {
     // checkbox
     this.form = this.fb.group({
      trieuchungbenh: this.fb.array([])
    });
  //   this.loadListTT();
     this.loadList();

  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.trieuchungbenh.push({ search: e.target.value });
     // this.uncheck = true;
    } else {
      const index = this.trieuchungbenh.indexOf({ search: e.target.value });
      this.trieuchungbenh.splice(index, 1);

    }
  }

  // get danh sach
  public loadList(): any {
      this.benhService.getAll().subscribe(response => {
        if (response && response.Status) {
          this.dataSource = response.Data;
          this.expression = true;
        }
      });
  }

 
  // xem chi tiết 
  public view(mabenh: any) {
    this.navigateDetail(mabenh);
  }

  private navigateDetail(mabenh: any) {
    if (mabenh) {
      // chuyen sang màn hình chi tiết 
      this.router.navigate(['trangchu/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
    } else {
      this.message.create(TypeMessage.Error, 'Có lỗi xảy ra!');
    }
  }

  submitForm() {
    this.load(this.trieuchungbenh);
    // this.uncheck = false;
    // this.uncheck1 = false;
  }
  private load(searchDTO: any) {
    this.trieuchungService.GetListBenhByListTrieuChung(searchDTO).subscribe(response => {
      if (response && response.Status) {
        this.expression = false;
        this.dataSourceTT = response.Data;
      }
    });
  }

  public loadListTT(): any {
    this.trieuchungService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSourceListTT = response.Data;
      }
    });
  }

  // unCheckAll($event){
  //  if ($event.target.checked){
  //   this.uncheck1 = false;

  //  }else
  //  {
  //    this.uncheck = true;
  //  }
  //     this.form.reset();
  // }

  // reset(): void {
  //   this.form.reset((element) => {
  //     element.nativeElement.checked = false;
  //   });
  // }
}
