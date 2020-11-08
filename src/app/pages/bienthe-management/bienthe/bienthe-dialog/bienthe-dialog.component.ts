import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BienTheDTO } from 'src/app/models/BienTheDTO';
import { BientheService } from 'src/app/shared/services/bienthe.service';
import { ChatLuongService } from 'src/app/shared/services/chat-luong.service';
import { ChungloaiService } from 'src/app/shared/services/chungloai.service';
import { GiongService } from 'src/app/shared/services/giong.service';

@Component({
  selector: 'app-bienthe-dialog',
  templateUrl: './bienthe-dialog.component.html',
  styleUrls: ['./bienthe-dialog.component.css']
})
export class BientheDialogComponent implements OnInit {

  isConfirmLoading = false;
  isShowAdd = false;
  isSaveLoading = false;
  listChungLoai: any;
  listGiong: any;
  listChatLuong: any;
  @Input() isAdd: boolean;
  @Input() bientheDto: BienTheDTO;

  validateForm: FormGroup;

  loading = false;

  constructor(private chungloaiService: ChungloaiService,
              private bientheService: BientheService,
              private giongService: GiongService,
              private chatluongService: ChatLuongService,
              private fb: FormBuilder,
              private message: NzMessageService,
              private modal: NzModalRef,
  ) { }




  ngOnInit(): void {
    this.initFormValidate();
    this.getChatLuong();
    this.getChungLoai();
    this.getGiong();
  }

  
  private initFormValidate(): void {
    this.validateForm = this.fb.group({
      _ipText_TenBienThe: ['', Validators.required],
      _ipTextarea_MauSac: ['', Validators.required],
      _rdo_gender: ['True', Validators.required],
      _selectBox_ChungLoai: ['', Validators.required],
      _selectBox_MaGiong: ['', Validators.required],
      _selectBox_ChatLuong: ['', Validators.required],
      _ipTextarea_MoTa: [''],
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
  /**
  * check them hoac chinh sua nhan vien
  */
  private saveData() {
    this.isConfirmLoading = true;
    if (!this.bientheDto || this.isAdd) {
      this.insert();
    } else {
      this.update();
    }
    console.log(this.bientheDto);
  }

  // tao nhan vien moi
  private insert(): void {
    
    if (this.bientheDto) {
      this.bientheService.create(this.bientheDto).subscribe(response => {

        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Thêm thành công!'
          );
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
    if (this.bientheDto) {
      this.bientheService.update(this.bientheDto).subscribe(response => {
        if (response && response.Status) {
          this.message.create(TypeMessage.Success, 'Cập nhật  thành công!'
          );
          console.log(this.bientheDto);
        } else {
          this.message.create(TypeMessage.Error, 'Cập nhật không thành công!'
          );
        }
        this.isConfirmLoading = false;
      });
    }
  }


  resetForm(): void {
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  private getChungLoai(): any {
    this.chungloaiService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listChungLoai = response.Data;
      }
    });
  }

  private getGiong(): any {
    this.giongService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listGiong = response.Data;
      }
    });
  }

  private getChatLuong(): any {
    this.chatluongService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listChatLuong = response.Data;
      }
    });
  }
}
