import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';
import { BenhService } from 'src/app/shared/services/benh.service';

@Component({
  selector: 'app-trieuchung-dialog',
  templateUrl: './trieuchung-dialog.component.html',
  styleUrls: ['./trieuchung-dialog.component.css']
})
export class TrieuchungDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;
  @Input() isAddtt: boolean;
  @Input() trieuchungDto: TrieuChungDTO;
  validateForm: FormGroup;

  selected: any = [];

  constructor(
    private benhService: BenhService,
    private message: NzMessageService,
    private modal: NzModalRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initFormValidate();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_Tentrieuchung:  ['', Validators.required],
      _ipTextarea_MoTa: ['', Validators.required],
    });
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

  private saveData() {
    this.isConfirmLoading = true;
    if (!this.trieuchungDto || this.isAddtt) {
      this.insert();

    } else {
      this.update();
    }
  }

  resetForm(): void {
    this.validateForm.reset();
    // tslint:disable-next-line: forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

   // tao  moi
   private insert(): void {
    if (this.trieuchungDto) {
      this.benhService.createTrieuChung(this.trieuchungDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
        //  this.loadList();
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
    // if (this.benhDto) {
    //   this.benhService.update(this.benhDto).subscribe(response => {
    //     if (response && response.Status) {
    //       this.message.create(TypeMessage.Success, 'Cập nhật bệnh thành công!'
    //       );
    //       console.log(this.benhDto);
    //       this.loadList();
    //     } else {
    //       this.message.create(TypeMessage.Error, 'Cập nhật bệnh không thành công!'
    //       );
    //     }
    //     this.isConfirmLoading = false;
    //   });
    // }
  }
}
