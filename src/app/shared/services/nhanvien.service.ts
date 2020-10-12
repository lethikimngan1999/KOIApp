import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse, NhanVienDTO } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {

  constructor(private http: HttpClient, private baseService: BaseService) { }

  public getAll(): Observable<BaseResponse<NhanVienDTO>> {
    return this.baseService.get<BaseResponse<NhanVienDTO[]>>('api/NhanVien/GetAll');
  }

  public getEmployeeNotAccount(): Observable<BaseResponse<NhanVienDTO>> {
    return this.baseService.get<BaseResponse<NhanVienDTO[]>>('api/NhanVien/GetEmployeeNotAccount');
}

  public create(data: NhanVienDTO): Observable<BaseResponse<string>> {
    return this.baseService.post<BaseResponse<string>>('api/NhanVien', data);
  }

  public update(data: NhanVienDTO): Observable<BaseResponse<string>> {
    return this.baseService.put<BaseResponse<string>>('api/NhanVien', data);
  }

  public getDetail(manhanvien: string): Observable<BaseResponse<string>> {

    const httpParams = new HttpParams().set('manhanvien', manhanvien);
    return this.baseService.get<BaseResponse<string>>('api/NhanVien/GetById', httpParams);
  }

  public delete(data: any): Observable<BaseResponse<any>> {
    return this.baseService.delete<BaseResponse<any>>('api/NhanVien', data);
  }
}
