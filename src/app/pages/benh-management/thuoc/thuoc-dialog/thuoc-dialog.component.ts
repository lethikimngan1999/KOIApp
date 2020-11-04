import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { ThuocDTO } from 'src/app/models/ThuocDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-thuoc-dialog',
  templateUrl: './thuoc-dialog.component.html',
  styleUrls: ['./thuoc-dialog.component.css']
})
export class ThuocDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;
  @Input() isAdd: boolean;
  @Input() thuocDto: ThuocDTO;

  validateForm: FormGroup;
  loading = false;
  dataSource: any = [];

  listBenh: BenhDTO[] = [];
  modelbenhModal: any = [];
  
  constructor(
    private benhService: BenhService,
    private fb: FormBuilder,
    private modal: NzModalRef,
    private thuocService: ThuocService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    // if (this.isAdd) {
     this.initFormValidate();
    // } else {
    //   this.initFormValidateEdit();
     
    // }
    this.getBenhs();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_TenThuoc: ['', Validators.required],
      _ipTextarea_CongDung: ['', Validators.required],
      _ipTextarea_CachDung:  ['', Validators.required],
      _ipTextarea_LuuY: [''],
      _selectBox_benh: [''],
    });
  }
  // private initFormValidateEdit(): void {
  //   this.validateForm = this.fb.group({
  //     _ipText_TenThuoc: ['', Validators.required],
  //     _ipTextarea_CongDung: ['', Validators.required],
  //     _ipTextarea_CachDung:  ['', Validators.required],
  //     _ipTextarea_LuuY: [''],
  //     // _selectBox_benh: ['', [Validators.required]],
  //   });
  // }

  public handleCancelButton(): void {
    this.resetForm();
    this.modal.destroy();
  }

  public handleSubmitButton(): void {
    this.isSaveLoading = true;
    this.saveData();
    setTimeout(() => {
      this.isSaveLoading = false;
    }, 1000);
    this.modal.destroy();
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  private saveData() {
    this.isConfirmLoading = true;
    if (!this.thuocDto || this.isAdd) {
      this.insert();

    } else {
      this.update();
    }
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


  // tao  moi
  private insert(): void {
    if (this.thuocDto) {
        this.thuocService.create(this.thuocDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
        // this.loadList();
        } else {
          this.message.create(TypeMessage.Error, 'Thêm không thành công!'
          );
        }
        this.isConfirmLoading = false;
        this.resetForm();
      });
    }
  }

  private update() {
    if (this.thuocDto) {

      this.thuocService.update(this.thuocDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật thành công!'
          );
          console.log(this.thuocDto);
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }

  private getBenhs(): any {
    this.benhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listBenh = JSON.parse(JSON.stringify(response.Data));
        this.modelbenhModal = JSON.parse(JSON.stringify(response.Data));
      }
    });
  }
}
