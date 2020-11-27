import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { SearchDTO, TrieuChungBenhDTO } from 'src/app/models/TrieuChungBenhDTO';
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

  
  public CreateTrieuChungBenh(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.post<BaseResponse<any>>('api/TrieuChungBenh/CreateTrieuChungBenh', data);
  }

  public GetAllTrieuChung(matrieuchung: string): Observable<BaseResponse<TrieuChungBenhDTO>> {
    const httpParams = new HttpParams().set('matrieuchung', matrieuchung);
    return this.baseSevice.get<BaseResponse<TrieuChungBenhDTO[]>>('api/TrieuChungBenh/GetAllTrieuChung', httpParams);
  }
  
  public GetAllBenhByType(matrieuchung: string): Observable<BaseResponse<TrieuChungBenhDTO>> {
    const httpParams = new HttpParams().set('matrieuchung', matrieuchung);
    return this.baseSevice.get<BaseResponse<TrieuChungBenhDTO[]>>('api/TrieuChungBenh/GetAllBenhByType', httpParams);
  }
  
  public Create(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.post<BaseResponse<any>>('api/TrieuChungBenh', data);
  }

  public GetListBenhByListTrieuChung(data: any): Observable<BaseResponse<BenhDTO[]>> {
    return this.baseSevice.post<BaseResponse<BenhDTO[]>>('api/TrieuChungBenh/GetAllTrieuChung', data);
  }
}
