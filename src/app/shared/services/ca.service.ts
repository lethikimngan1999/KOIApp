import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { CaDTO } from 'src/app/models/CaDTO';

@Injectable({
  providedIn: 'root'
})
export class CaService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<CaDTO>> {
      return this.baseSevice.get<BaseResponse<CaDTO[]>>('api/Ca/GetAll');
  }
}
