import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { BienTheDTO } from 'src/app/models/BienTheDTO';

@Injectable({
  providedIn: 'root'
})
export class BientheService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<BienTheDTO>> {
      return this.baseSevice.get<BaseResponse<BienTheDTO[]>>('api/BienThe/GetAll');
  }

  public getDetail(mabienthe: string): Observable<BaseResponse<string>> {

    const httpParams = new HttpParams().set('mabienthe', mabienthe);
    return this.baseSevice.get<BaseResponse<string>>('api/BienThe/GetById', httpParams);
  }

  public getListAll(): Observable<BaseResponse<BienTheDTO>> {
    return this.baseSevice.get<BaseResponse<BienTheDTO[]>>('api/BienThe/GetListAll');
}

  public create(data: BienTheDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.post<BaseResponse<string>>('api/BienThe', data);
  }

  public update(data: BienTheDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.put<BaseResponse<string>>('api/BienThe', data);
  }
}
