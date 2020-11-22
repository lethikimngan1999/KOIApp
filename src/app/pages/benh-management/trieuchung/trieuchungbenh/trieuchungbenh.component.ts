import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchDTO } from 'src/app/models/TrieuChungBenhDTO';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

@Component({
  selector: 'app-trieuchungbenh',
  templateUrl: './trieuchungbenh.component.html',
  styleUrls: ['./trieuchungbenh.component.css']
})
export class TrieuchungbenhComponent implements OnInit {

  form: FormGroup;
  dataSourceTT: any = [];
  dataSource: any = [];
  public filterData: any = {};
  trieuchungbenh: any[] = [];

  constructor(private fb: FormBuilder,
              private trieuchungService: TrieuchungService, ) { }

  ngOnInit(): void {
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

  // checkbox
  // onCheckboxChange(e) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;

  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   //  this.loadListBenh(e.target.value);
  //   }
  //   else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //        // this.loadListBenh(e.target.value);
  //         return;
  //       }
  //       i++;
  //     }

  //     );
  //     // this.loadListBenh(checkArray[i]);
  //     // console.log(checkArray[i]);
  //   }
  // }

  submitForm() {
    this.load(this.trieuchungbenh);
  }
  // public loadListBenh(value: string) {
  //   this.trieuchungService.GetAllTrieuChung(value).subscribe(response => {
  //     if (response && response.Status) {
  //       this.dataSourceTT = response.Data;
  //       // this.has = true;
  //       // this.isConfirmLoading = false;
  //       console.log(this.dataSourceTT);
  //     }
  //   });
  // }

  private load(searchDTO: any) {
    this.trieuchungService.GetListBenhByListTrieuChung(searchDTO).subscribe(response => {
      if (response && response.Status) {
        this.dataSourceTT = response.Data;
        // this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }

  public loadList(): any {
    this.trieuchungService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.dataSource = response.Data;
        // this.isConfirmLoading = false;
        // console.log(this.dataSource);
      }
    });
  }
}
