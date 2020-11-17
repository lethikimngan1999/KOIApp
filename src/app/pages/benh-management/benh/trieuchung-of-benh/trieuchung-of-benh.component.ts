import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { TypeMessage } from 'src/app/app.constant';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';
import { TrieuchungService } from 'src/app/shared/services/trieuchung.service';

@Component({
  selector: 'app-trieuchung-of-benh',
  templateUrl: './trieuchung-of-benh.component.html',
  styleUrls: ['./trieuchung-of-benh.component.css']
})
export class TrieuchungOfBenhComponent implements OnInit {


  @Input() isShowAdd: boolean;
  @Input() benhDto: BenhDTO;
  @Input() listThuocs: any;
  @Input() maTrieuchungs: any;
  listTrieuchung: TrieuChungDTO[] = [];
  modelModal: any = [];
  trieuchungbenh: any = [];
  listBenh: BenhDTO[] = [];

  validateForm: any;
  listTrieuchungsOfBenh: TrieuChungDTO[] = [];


  constructor(
    private fb: FormBuilder,
    private trieuchungService: TrieuchungService,
    private modal: NzModalRef,
    private message: NzMessageService,
  ) {
    this.validateForm = this.fb.group({
      _selectBox_trieuchung: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getTrieuchungs();
  }

  private getTrieuchungs(): any {
    this.trieuchungService.getAll().subscribe(response => {
      if (response && response.Status) {
        this.listTrieuchung = JSON.parse(JSON.stringify(response.Data));
        this.modelModal = JSON.parse(JSON.stringify(response.Data));
      }
    });
  }

  
  public add() {
    const trieuchungbenh: any[] = [];
    this.maTrieuchungs.forEach((item: any) => {
      trieuchungbenh.push({ mabenh: this.benhDto.MaBenh, matrieuchung: item });
    });
    this.trieuchungService.Create(trieuchungbenh).subscribe(response => {
      if (response.Status === true) {
        this.message.create(TypeMessage.Success, 'Cập nhật  thành công!');
        this.listBenh.find(p => p.MaBenh === this.benhDto.MaBenh).ListTrieuChungs = this.listTrieuchung;
        this.getTrieuchungs();
      } else {
        this.message.create(TypeMessage.Error, 'Cập nhật không thành công!');
      }
    });
    this.modal.destroy();
  }

}
