import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { TypeMessage } from 'src/app/app.constant';
import { NhanVienDTO } from 'src/app/models';
import { NhanvienService } from 'src/app/shared/services/nhanvien.service';

@Component({
  selector: 'app-nhanvien-dialog',
  templateUrl: './nhanvien-dialog.component.html',
  styleUrls: ['./nhanvien-dialog.component.css']
})
export class NhanvienDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAddNhanVien = false;
  isSaveLoading = false;
  dataSource: any = [];
  selectedEmployee: any = [];
  @Input() isAdd: boolean;
  @Input() nhanvienDto: NhanVienDTO;

  dateFormat = 'dd/MM/yyyy';

  validateForm: FormGroup;

  loading = false;
  avatarUrl: string;

  constructor(
    private nhanvienService: NhanvienService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private modal: NzModalRef,

  ) { }

  ngOnInit(): void {
    this.initFormValidate();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_CMND: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)], [this.userNameAsyncValidator]],
      _ipText_HoLot: ['', Validators.required],
      _ipText_TenNhanVien: ['', Validators.required],
      _ipDate_NgaySinh: [null, Validators.required],
      _rdo_gender: ['False', Validators.required],
      _ipText_email: [null, [Validators.email, Validators.required]],
      _ipText_Sdt: ['', [Validators.required, Validators.maxLength(13)]],
      _ipTextarea_DiaChi: ['', '']
    });
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        this.nhanvienService.getByCMND(control.value).subscribe(response => {
          if (response.Status && response.Data) {
            this.selectedEmployee = response.Data;
            // tslint:disable-next-line: triple-equals
            if (this.selectedEmployee.MaNhanVien != this.nhanvienDto.MaNhanVien) {
              observer.next({ error: true, duplicated: true });
            } else {
              observer.next(null);
            }
          } else {
            observer.next(null);
          }
          observer.complete();
        });
      }, 1000);
    })


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
   * check them hoac chinh sua nhan vien
   */
  private saveData() {
    this.isConfirmLoading = true;
    if (!this.nhanvienDto || this.isAdd) {
      this.InsertNhanVien();
    } else {
      this.UpdateNhanVien();
    }
  }

  // tao nhan vien moi
  private InsertNhanVien(): void {
    if (this.nhanvienDto) {
      this.nhanvienService.create(this.nhanvienDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm nhân viên thành công!'
          );
          this.loadNhanVienList();
        } else {
          this.message.create(TypeMessage.Error, 'Thêm nhân viên không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
      this.resetForm();
    }
  }

  private UpdateNhanVien() {
    if (this.nhanvienDto) {
      this.nhanvienService.update(this.nhanvienDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật nhân viên thành công!'
          );
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật nhân viên không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }

 // get danh sach nhan vien
 public loadNhanVienList(): any {
  this.nhanvienService.getAll().subscribe(response => {
    if (response && response.Status) {
      this.dataSource = response.Data;
      this.isConfirmLoading = false;
     // console.log(this.dataSource);
    }
  });
}
}
