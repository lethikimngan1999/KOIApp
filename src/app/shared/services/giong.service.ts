import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { GiongDTO } from 'src/app/models/GiongDTO';

@Injectable({
  providedIn: 'root'
})
export class GiongService {
  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<GiongDTO>> {
      return this.baseSevice.get<BaseResponse<GiongDTO[]>>('api/Giong/GetAll');
  }
}
