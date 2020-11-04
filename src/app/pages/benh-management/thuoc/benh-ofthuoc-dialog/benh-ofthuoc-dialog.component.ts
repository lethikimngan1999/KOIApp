import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { ThuocDTO } from 'src/app/models/ThuocDTO';
import { BenhService } from 'src/app/shared/services/benh.service';

@Component({
  selector: 'app-benh-ofthuoc-dialog',
  templateUrl: './benh-ofthuoc-dialog.component.html',
  styleUrls: ['./benh-ofthuoc-dialog.component.css']
})
export class BenhOfthuocDialogComponent implements OnInit {

  @Input() isShowAdd: boolean;
  @Input() thuocDto: ThuocDTO;
  @Input() maBenhs: any;
  @Input() listBenhs: any;
  listBenh: BenhDTO[] = [];
  modelRoleModal: any = [];
  thuocdieutri: any = [];
  listThuoc: ThuocDTO[] = [];

  validateForm: any;
  listBenhsOfThuoc: BenhDTO[] = [];


  constructor(
    private fb: FormBuilder,
    private benhService: BenhService,
    private modal: NzModalRef,
    private message: NzMessageService,
  ) {
    this.validateForm = this.fb.group({
      _selectBox_benh: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getBenhs();
  }

  private getBenhs(): any {
    this.benhService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listBenh = JSON.parse(JSON.stringify(response.Data));
        this.modelRoleModal = JSON.parse(JSON.stringify(response.Data));
      }
    });
  }


  public add() {
    const thuocdieutri: any[] = [];
    this.maBenhs.forEach((item: any) => {
      thuocdieutri.push({ mathuoc: this.thuocDto.MaThuoc, mabenh: item });
    });
    this.benhService.CreateDieuTriBenh(thuocdieutri).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Thêm bệnh được thuốc điều trị thành công!');
        this.listThuoc.find(p => p.MaThuoc === this.thuocDto.MaThuoc).ListBenhs = this.listBenhs;
        this.getBenhs();
      } else {
        this.message.create(TypeMessage.Error, 'Thêm bệnh được thuốc điều trị không thành công!');
      }
    });
    this.modal.destroy();
  }
}
