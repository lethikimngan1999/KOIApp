import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { LieuTrinhDTO } from 'src/app/models/LieuTrinhDTO';

@Injectable({
  providedIn: 'root'
})
export class LieutrinhService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<LieuTrinhDTO>> {
      return this.baseSevice.get<BaseResponse<LieuTrinhDTO[]>>('api/LieuTrinh/GetAll');
  }

  public getDetail(malieutrinh: string): Observable<BaseResponse<string>> {

    const httpParams = new HttpParams().set('malieutrinh', malieutrinh);
    return this.baseSevice.get<BaseResponse<string>>('api/LieuTrinh/GetById', httpParams);
  }

  public delete(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.delete<BaseResponse<any>>('api/LieuTrinh', data);
  }
}
