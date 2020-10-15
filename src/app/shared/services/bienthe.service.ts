import { HttpClient } from '@angular/common/http';
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
}
