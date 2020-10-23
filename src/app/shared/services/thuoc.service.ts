import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { ThuocDTO } from 'src/app/models/ThuocDTO';

@Injectable({
  providedIn: 'root'
})
export class ThuocService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<ThuocDTO>> {
      return this.baseSevice.get<BaseResponse<ThuocDTO[]>>('api/Thuoc/GetAll');
  }

  
  public CreateThuocDieuTri(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.post<BaseResponse<any>>('api/ThuocDieuTri', data);
  }

}
