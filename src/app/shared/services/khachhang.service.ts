import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { TheoDoiThongTinDTO } from 'src/app/models/TheoDoiThongTinDTO';

@Injectable({
  providedIn: 'root'
})
export class KhachhangService {

 
  constructor(private http: HttpClient, private baseService: BaseService) { }

  public getThongTin(makhachhang: string): Observable<BaseResponse<string>> {

    const httpParams = new HttpParams().set('makhachhang', makhachhang);
    return this.baseService.get<BaseResponse<string>>('api/KhachHang/GetById', httpParams);
  }

  public create(data: TheoDoiThongTinDTO): Observable<BaseResponse<string>> {
    return this.baseService.post<BaseResponse<string>>('api/TheoDoiThongTin', data);
  }
}
