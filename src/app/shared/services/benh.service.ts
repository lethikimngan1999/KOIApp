import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { BenhDTO } from 'src/app/models/BenhDTO';
import { LieuTrinhDTO } from 'src/app/models/LieuTrinhDTO';
import { TrieuChungDTO } from 'src/app/models/TrieuChungDTO';

@Injectable({
  providedIn: 'root'
})
export class BenhService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<BenhDTO>> {
      return this.baseSevice.get<BaseResponse<BenhDTO[]>>('api/Benh/GetAll');
  }
  public getDetail(mabenh: string): Observable<BaseResponse<string>> {
    const httpParams = new HttpParams().set('mabenh', mabenh);
    return this.baseSevice.get<BaseResponse<string>>('api/Benh/GetById', httpParams);
  }
  public CreateDieuTriBenh(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.post<BaseResponse<any>>('api/ThuocDieuTri/CreateDieuTriBenh', data);
  }

  public InsertAll(data: BenhDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.post<BaseResponse<string>>('api/Benh/InsertAll', data);
  }

  public update(data: BenhDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.put<BaseResponse<string>>('api/Benh', data);
  }

  public createLieuTrinh(data: LieuTrinhDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.post<BaseResponse<string>>('api/LieuTrinh', data);
  }

  public createTrieuChung(data: TrieuChungDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.post<BaseResponse<string>>('api/TrieuChung', data);
  }
}
