import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
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
  listBenh: BenhDTO[] = [];
  modelbenhModal: any = [];
  
  constructor(
    private benhService: BenhService,
    private message: NzMessageService,
    private modal: NzModalRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initFormValidate();
    this.getBenhs();
  }

  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_Tentrieuchung:  ['', Validators.required],
      _selectBox_benh: [''],
     // _ipTextarea_MoTa: ['', Validators.required],
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
        
      });
      this.resetForm();
    }
  }

  private update() {
    if (this.trieuchungDto) {
      this.benhService.updateTrieuChung(this.trieuchungDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật triệu chứng thành công!'
          );
          console.log(this.trieuchungDto);
         // this.loadList();
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật triệu chứng không thành công!'
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
