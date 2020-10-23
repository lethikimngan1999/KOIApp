import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { ThuocDTO } from 'src/app/models/ThuocDTO';
import { ThuocService } from 'src/app/shared/services/thuoc.service';

@Component({
  selector: 'app-thuoc-ofbenh-dialog',
  templateUrl: './thuoc-ofbenh-dialog.component.html',
  styleUrls: ['./thuoc-ofbenh-dialog.component.css']
})
export class ThuocOfbenhDialogComponent implements OnInit {


  @Input() isShowAdd: boolean;
  @Input() benhDto: BenhDTO;
  @Input() MaThuocs: any;
  @Input() listThuocs: any;
  listThuoc: ThuocDTO[] = [];
  modelRoleModal: any = [];
  thuocdieutri: any = [];
  listBenh: BenhDTO[] = [];

  validateForm: any;
  listThuocsOfBenh: ThuocDTO[] = [];


  constructor(
    private fb: FormBuilder,
    private thuocService: ThuocService,
    private modal: NzModalRef,
    private message: NzMessageService,
  ) {
    this.validateForm = this.fb.group({
      _selectBox_thuoc: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getThuocs();
  }

  private getThuocs(): any {
    this.thuocService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listThuoc = JSON.parse(JSON.stringify(response.Data));
        this.modelRoleModal = JSON.parse(JSON.stringify(response.Data));
      }
    });
  }

  
  public add() {
    const thuocdieutri: any[] = [];
    this.MaThuocs.forEach((item: any) => {
      thuocdieutri.push({ mabenh: this.benhDto.MaBenh, mathuoc: item });
    });
    this.thuocService.CreateThuocDieuTri(thuocdieutri).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Thêm thuốc điều trị thành công!');
        this.listBenh.find(p => p.MaBenh === this.benhDto.MaBenh).ListThuocs = this.listThuocs;
      } else {
        this.message.create(TypeMessage.Error, 'Thêm thuốc điều trị không thành công!');
      }
    });
    this.modal.destroy();
  }
}
