import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { ChungLoaiDTO } from 'src/app/models/ChungLoaiDTO';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';

@Component({
  selector: 'app-chungloai-dialog',
  templateUrl: './chungloai-dialog.component.html',
  styleUrls: ['./chungloai-dialog.component.css']
})
export class ChungloaiDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;

  @Input() isAdd: boolean;
  @Input() chungloaiDto: ChungLoaiDTO;

  validateForm: FormGroup;

  loading = false;

  constructor(
    private chungloaiService: ChungloaiService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private modal: NzModalRef,

  ) { }

  ngOnInit(): void {
    this.initFormValidate();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_TenChungLoai: ['', [Validators.required, Validators.maxLength(40)]],
      _ipTextarea_MauSac: ['', Validators.required],
      _ipTextarea_MucDoChamSoc: ['', Validators.required],
      _ipTextarea_CheDoAn: ['', Validators.required],
      _ipText_TinhCach: ['', Validators.required],
      _ipText_DieuKienNuoc: ['', Validators.required],
      _ipTextarea_CachChamSoc: ['', ''],
      _ipTextarea_MoTa: ['', ''],
      _ipText_KichThuocToiDa : ['', '']
    });
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

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

  /**
   * check them hoac chinh sua
   */
  private saveData() {
    this.isConfirmLoading = true;
    if (!this.chungloaiDto || this.isAdd) {
      this.Insert();
    } else {
      this.Update();
    }
  }

  // tao  moi
  private Insert(): void {
    if (this.chungloaiDto) {
      this.chungloaiService.create(this.chungloaiDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Thêm không thành công!'
          );
        }
        this.isConfirmLoading = false;
        this.resetForm();
      });
    }
  }

  private Update() {
    if (this.chungloaiDto) {
      this.chungloaiService.update(this.chungloaiDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật chủng loại thành công!'
          );
          console.log(this.chungloaiDto);
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật chủng loại không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }


}
