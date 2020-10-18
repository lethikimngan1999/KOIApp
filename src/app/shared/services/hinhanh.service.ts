import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { HinhAnhBienTheDTO } from 'src/app/models/HinhAnhBienTheDTO';

@Injectable({
  providedIn: 'root'
})
export class HinhanhService {

  constructor(private http: HttpClient, private baseService: BaseService) { }

  public create(data: HinhAnhBienTheDTO): Observable<BaseResponse<string>> {
    return this.baseService.post<BaseResponse<string>>('api/HinhAnhBienThe', data);
  }

  public update(data: HinhAnhBienTheDTO): Observable<BaseResponse<string>> {
    return this.baseService.put<BaseResponse<string>>('api/HinhAnhBienThe', data);
  }

  public getAll(): Observable<BaseResponse<HinhAnhBienTheDTO>> {
    return this.baseService.get<BaseResponse<HinhAnhBienTheDTO[]>>('api/HinhAnhBienThe/GetAll');
}
}
