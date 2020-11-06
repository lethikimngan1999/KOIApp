import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';

@Injectable({
  providedIn: 'root'
})
export class TrieuchungService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<TrieuChungDTO>> {
      return this.baseSevice.get<BaseResponse<TrieuChungDTO[]>>('api/TrieuChung/GetAll');
  }

  public getDetail(matrieuchung: string): Observable<BaseResponse<string>> {

    const httpParams = new HttpParams().set('matrieuchung', matrieuchung);
    return this.baseSevice.get<BaseResponse<string>>('api/TrieuChung/GetById', httpParams);
  }

  public delete(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.delete<BaseResponse<any>>('api/TrieuChung', data);
  }
}
