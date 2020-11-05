import { HttpClient, HttpParams } from '@angular/common/http';
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

  public create(data: ThuocDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.post<BaseResponse<string>>('api/Thuoc', data);
  }

  public update(data: ThuocDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.put<BaseResponse<string>>('api/Thuoc', data);
  }

  public getDetail(mathuoc: string): Observable<BaseResponse<string>> {
    const httpParams = new HttpParams().set('mathuoc', mathuoc);
    return this.baseSevice.get<BaseResponse<string>>('api/Thuoc/GetById', httpParams);
  }

  public delete(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.delete<BaseResponse<any>>('api/Thuoc', data);
  }
}
