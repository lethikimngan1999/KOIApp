import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { ChatLuongDTO } from 'src/app/models/ChatLuongDTO';

@Injectable({
  providedIn: 'root'
})
export class ChatLuongService {

  constructor(private http: HttpClient, private baseSevice: BaseService) { }

  public getAll(): Observable<BaseResponse<ChatLuongDTO>> {
      return this.baseSevice.get<BaseResponse<ChatLuongDTO[]>>('api/ChatLuong/GetAll');
  }
}
