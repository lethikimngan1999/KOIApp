import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KhachhangService } from 'src/app/shared/services/khachhang.service';


var CanvasJS = require('./../../../assets/js/canvasjs.min.js');
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {

  dataPoints1: any = [];
  seasondata: any = []; // your other array...
  form: FormGroup;

  constructor(private fb: FormBuilder,
    public khachhangService: KhachhangService,) { }

  month: string;
  year: string;

  ngOnInit() {

    this.initFormValidate();
  }

  private initFormValidate(): void {
    this.form = this.fb.group({
      month: [''],
      year: [''],

    });
  }

  onCheckboxChange(e) {
    this.month = e.target.value;
  }

  onCheckboxChange1(e) {
    this.year = e.target.value;
  }

  submitForm() {
    this.dataPoints1.length = 0;
    this.update(this.month, this.year);
    console.log(this.seasondata);

  }

  public update(month: any, year: any) {
   
    const data1 = { month, year };
    this.khachhangService.thongke(data1).subscribe(response => {
      if (response && response.Status) {
        this.dataPoints1 = response.Data;

        this.dataPoints1.map(item => {
          return {
            name: item.label,
            value: item.y
          }
        }).forEach(item => this.seasondata.push(item));
     
        var json = JSON.stringify(this.seasondata);  
        console.log(json);
      }
    });
  }
}
