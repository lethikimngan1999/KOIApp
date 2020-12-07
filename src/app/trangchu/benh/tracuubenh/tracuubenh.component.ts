import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BenhService } from 'src/app/shared/services/benh.service';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

@Component({
  selector: 'app-tracuubenh',
  templateUrl: './tracuubenh.component.html',
  styleUrls: ['./tracuubenh.component.css']
})
export class TracuubenhComponent implements OnInit {

  form: FormGroup;
  trieuchungbenh: any[] = [];
  dataSourceTT: any = [];
  dataSourceLQ: any = [];
  dataSourceListTT: any = [];
  constructor(private fb: FormBuilder,
    private trieuchungService: TrieuchungService,
    public benhService: BenhService,) { }

  ngOnInit(): void {
    // checkbox
    this.form = this.fb.group({
      trieuchungbenh: this.fb.array([])
    });
    this.loadListTT();
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

  submitForm() {
    this.load(this.trieuchungbenh);
    this.loadLQ(this.trieuchungbenh);
    // this.uncheck = false;
    // this.uncheck1 = false;
  }
  private load(searchDTO: any) {
    this.trieuchungService.GetListBenhByListTrieuChung(searchDTO).subscribe(response => {
      if (response && response.Status) {
       // this.expression = false;
        this.dataSourceTT = response.Data;
      }
    });
  }

  private loadLQ(searchDTO: any) {
    this.trieuchungService.GetAllBenhLienQuan(searchDTO).subscribe(response => {
      if (response && response.Status) {
       // this.expression = false;
        this.dataSourceLQ = response.Data;
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
