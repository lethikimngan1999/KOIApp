import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/models';
import { LoginDTO } from 'src/app/models/LoginDTO';
import { UserDTO } from 'src/app/models/UserDTO';
import { BaseService } from 'src/app/common_base/base.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private baseSevice: BaseService) { }

  public getUser(): Observable<BaseResponse<UserDTO>> {
    return this.baseSevice.get<BaseResponse<UserDTO>>('api/Account/GetUser');
  }

  public getToken(data: LoginDTO): Observable<BaseResponse<string>> {
    return this.baseSevice.post<BaseResponse<string>>('api/Login', data);
  }

  public validateToken(): Observable<BaseResponse<boolean>> {
    return this.baseSevice.get<BaseResponse<boolean>>('api/Account/ValidateToken');
  }

}

