import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';
import { BenhService } from 'src/app/shared/services/benh.service';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

@Component({
  selector: 'app-trieuchungbenh-dialog',
  templateUrl: './trieuchungbenh-dialog.component.html',
  styleUrls: ['./trieuchungbenh-dialog.component.css']
})
export class TrieuchungbenhDialogComponent implements OnInit {

  @Input() isShowAdd: boolean;
  @Input() trieuchungDto: TrieuChungDTO;
  @Input() maBenhs: any;
  @Input() listBenhs: any;
  listBenh: BenhDTO[] = [];
  modelModal: any = [];
  trieuchungbenh: any = [];
  listTrieuchung: TrieuChungDTO[] = [];

  validateForm: any;
  listBenhsOfTrieuchung: BenhDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private trieuchungService: TrieuchungService,
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
        this.modelModal = JSON.parse(JSON.stringify(response.Data));
      }
    });
  }


  public add() {
    const trieuchungbenh: any[] = [];
    this.maBenhs.forEach((item: any) => {
      trieuchungbenh.push({ matrieuchung: this.trieuchungDto.MaTrieuChung, mabenh: item });
    });
    this.trieuchungService.CreateTrieuChungBenh(trieuchungbenh).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Thêm bệnh thành công!');
        this.listTrieuchung.find(p => p.MaTrieuChung === this.trieuchungDto.MaTrieuChung).ListBenhs = this.listBenhs;
        this.getBenhs();
      } else {
        this.message.create(TypeMessage.Error, 'Thêm bệnh không thành công!');
      }
    });
    this.modal.destroy();
  }
}
