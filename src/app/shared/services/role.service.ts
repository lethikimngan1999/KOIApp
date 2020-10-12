import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { RoleDTO } from 'src/app/models/RoleDTO';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private baseSevice: BaseService) { }

  // GET
  public getAll(): Observable<BaseResponse<RoleDTO[]>> {
    return this.baseSevice.get<BaseResponse<RoleDTO[]>>('api/Role/GetAll');
  }

  public getById(data: RoleDTO): Observable<BaseResponse<RoleDTO>> {
    return this.baseSevice.get<BaseResponse<RoleDTO>>('api/Role/GetByRoleId', data);
  }

  // POST
  public create(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.post<BaseResponse<any>>('api/Role', data);
  }

  public update(data: RoleDTO): Observable<BaseResponse<any>> {
    return this.baseSevice.put<BaseResponse<any>>('api/Role', data);
  }

  public delete(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.delete<BaseResponse<any>>('api/Role', data);
  }

  public getRolesOfUser(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.get<BaseResponse<any>>('api/UserRole/GetRolesOfUser', data);
  }

  public createRoleUser(data: any): Observable<BaseResponse<any>> {
    return this.baseSevice.post<BaseResponse<any>>('api/UserRole', data);
  }

}
