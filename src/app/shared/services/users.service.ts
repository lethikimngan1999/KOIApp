import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/common_base/base.service';
import { BaseResponse } from 'src/app/models';
import { TaiKhoanKhachHangDTO } from 'src/app/models/TaiKhoanKhachHangDTO';
import { UserDTO } from 'src/app/models/UserDTO';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient, private baseSevice: BaseService) { }

    public getAllEmployeeAccount(): Observable<BaseResponse<UserDTO>> {
        return this.baseSevice.get<BaseResponse<UserDTO[]>>('api/User/GetAll');
    }

    public createEmployeeAccount(data: UserDTO): Observable<BaseResponse<string>> {
        return this.baseSevice.post<BaseResponse<string>>('api/User/CreateEmployeeAccount', data);
    }

    public CreateKhachHangAccount(data: TaiKhoanKhachHangDTO): Observable<BaseResponse<string>> {
        return this.baseSevice.post<BaseResponse<string>>('api/User/CreateKhachHangAccount', data);
    }

    public updateEmployeeAccount(data: UserDTO): Observable<BaseResponse<string>> {
        return this.baseSevice.put<BaseResponse<string>>('api/User/UpdateEmployeeAccount', data);
    }

    public getDetailUser(userId: string): Observable<BaseResponse<string>> {

        const httpParams = new HttpParams().set('userId', userId);
        return this.baseSevice.get<BaseResponse<string>>('api/User/GetById', httpParams);
    }

    public deleteEmployeeAccount(data: any): Observable<BaseResponse<any>> {
        return this.baseSevice.delete<BaseResponse<any>>('api/User/DeleteEmployeeAccount', data);
    }

    public getByUserName(userName: string): Observable<BaseResponse<string>> {
        const httpParams = new HttpParams().set('userName', userName);
        return this.baseSevice.get<BaseResponse<string>>('api/User/GetByUserName', httpParams);
    }
    public getAllUserAccountActive(): Observable<BaseResponse<UserDTO>> {
        return this.baseSevice.get<BaseResponse<UserDTO[]>>('api/User/GetAllUserAccountActive');
    }

    public getAllUserAccountLocked(): Observable<BaseResponse<UserDTO>> {
        return this.baseSevice.get<BaseResponse<UserDTO[]>>('api/User/GetAllUserAccountLocked');
    }

    public updateStatusAccount(data: any): Observable<BaseResponse<string>> {
        return this.baseSevice.put<BaseResponse<string>>('api/User/UpdateStatusAccount', data);
      }

    public resetPasswordAccount(data: any): Observable<BaseResponse<any>> {
        return this.baseSevice.put<BaseResponse<string>>('api/User/ResetPassword', data);
    }

    public updatePasswordAccount(data: any): Observable<BaseResponse<string>> {
        return this.baseSevice.put<BaseResponse<string>>('api/User/ChangePassword', data);
      }
}
