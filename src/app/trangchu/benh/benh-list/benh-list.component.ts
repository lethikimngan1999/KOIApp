import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  constructor(private fb: FormBuilder,
              private trieuchungService: TrieuchungService,
              public benhService: BenhService,) { }

  ngOnInit(): void {
    this.loadListTT();
    this.loadList();
    // checkbox
    this.form = this.fb.group({
      trieuchungbenh: this.fb.array([])
    });
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.trieuchungbenh.push({ search: e.target.value });
    } else {
      const index = this.trieuchungbenh.indexOf({ search: e.target.value });
      this.trieuchungbenh.splice(index, 1);
    }
  }

  // get danh sach
  public loadList(): any {
    
      this.benhService.getAll().subscribe(response => {
        if (response && response.Status) {
          // this.expression = true;
          this.dataSource = response.Data;
          this.expression = true;
        }
      });
  }

  submitForm() {
   
    this.load(this.trieuchungbenh);
    // this.expression = false;
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
}
