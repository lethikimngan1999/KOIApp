import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { BenhDTO } from 'src/app/models/BenhDTO';

@Injectable({
  providedIn: 'root'
})
export class BenhService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<BenhDTO>> {
      return this.baseSevice.get<BaseResponse<BenhDTO[]>>('api/Benh/GetAll');
  }
}