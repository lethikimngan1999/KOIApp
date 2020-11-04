import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { ThuocDTO } from 'src/app/models/ThuocDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-benh-dialog',
  templateUrl: './benh-dialog.component.html',
  styleUrls: ['./benh-dialog.component.css']
})
export class BenhDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;
  @Input() isAdd: boolean;
  @Input() benhDto: BenhDTO;
  validateForm: FormGroup;
  loading = false;

  dataSource: any = [];
  listThuoc: ThuocDTO[] = [];
  modelThuocModal: any = [];
  
  constructor(
    private thuocService: ThuocService,
    private fb: FormBuilder,
    private modal: NzModalRef,
    private benhService: BenhService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    // if (this.isAdd) {
    //   this.initFormValidate();
    // } else {
    //   this.initFormValidateEdit();
    // }
    this.initFormValidate();
    this.getThuocs();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_TenBenh: ['', Validators.required],
      _ipTextarea_NguyenNhan: ['', Validators.required],
      _ipTextarea_CachDieuTri:  ['', Validators.required],
      _ipTextarea_MoTa: ['', Validators.required],
      _selectBox_thuoc: [''],
    });
  }
  // private initFormValidateEdit(): void {
  //   this.validateForm = this.fb.group({
  //     _ipText_TenBenh: ['', Validators.required],
  //     _ipTextarea_NguyenNhan: ['', Validators.required],
  //     _ipTextarea_CachDieuTri:  ['', Validators.required],
  //     _ipTextarea_MoTa: ['', Validators.required],
  //    // _selectBox_thuoc: ['', [Validators.required]],
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
    if (!this.benhDto || this.isAdd) {
      this.insert();

    } else {
      this.update();
    }
  }

  // tao  moi
  private insert(): void {
    if (this.benhDto) {
      this.benhService.InsertAll(this.benhDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
          this.loadList();
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
    if (this.benhDto) {
      this.benhService.update(this.benhDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật bệnh thành công!'
          );
          console.log(this.benhDto);
          this.loadList();
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật bệnh không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }

  private getThuocs(): any {
    this.thuocService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listThuoc = JSON.parse(JSON.stringify(response.Data));
        this.modelThuocModal = JSON.parse(JSON.stringify(response.Data));
      }
    });
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
