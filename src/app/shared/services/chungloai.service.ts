import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { ChungLoaiDTO } from 'src/app/models/ChungLoaiDTO';

@Injectable({
  providedIn: 'root'
})
export class ChungloaiService {

  constructor(private http: HttpClient, private baseService: BaseService) { }

  public getAll(): Observable<BaseResponse<ChungLoaiDTO>> {
    return this.baseService.get<BaseResponse<ChungLoaiDTO[]>>('api/ChungLoai/GetAll');
  }


  public create(data: ChungLoaiDTO): Observable<BaseResponse<string>> {
    return this.baseService.post<BaseResponse<string>>('api/ChungLoai', data);
  }

  public update(data: ChungLoaiDTO): Observable<BaseResponse<string>> {
    return this.baseService.put<BaseResponse<string>>('api/ChungLoai', data);
  }

  public getDetail(machungloai: string): Observable<BaseResponse<string>> {

    const httpParams = new HttpParams().set('machungloai', machungloai);
    return this.baseService.get<BaseResponse<string>>('api/ChungLoai/GetById', httpParams);
  }
}
