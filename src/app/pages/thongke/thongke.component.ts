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
  seasondata = []; // your other array...
  form: FormGroup;

  constructor(private fb: FormBuilder,
    public khachhangService: KhachhangService,) { }

  month: string;
  year: string;

  ngOnInit() {

    this.initFormValidate();
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
      //  text: "Bệnh phổ biến trong tháng"
      },
      data: [{
        type: "column",
        dataPoints: this.seasondata
        //	dataPoints: [
        // { y: 71, label: "Trùng mỏ neo", x:0 },
        // { y: 55, label: "Mango", x:1 },
        // { y: 50, label: "Orange" , x:2},
        // { y: 65, label: "Banana" },
        // { y: 95, label: "Pineapple" },
        // { y: 68, label: "Pears" },
        // { y: 28, label: "Grapes" },
        // { y: 34, label: "Lychee" },
        // { y: 14, label: "Jackfruit" }
        //	]
      }]
    });

    chart.render();
  
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
    this.seasondata.length = 0;
    this.update(this.month, this.year);

    
  }

  public update(month: any, year: any) {
   
    const data1 = { month, year };
    this.khachhangService.thongke(data1).subscribe(response => {
      if (response && response.Status) {
        this.dataPoints1 = response.Data;

        // for (let index = 0; index < this.dataPoints.length; index++) {
        //     const element = this.dataPoints[index];
        //     this.seasondata.push({label: this.dataPoints[index]["label"], y:Number(this.dataPoints[index]["y"])});

        // }
        this.dataPoints1.map(item => {
          return {
            y: item.y,
            label: item.label
          }
        }).forEach(item => this.seasondata.push(item));
        console.log(this.seasondata);
      }
    });
  }
}
