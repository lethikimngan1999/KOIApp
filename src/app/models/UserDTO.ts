import { NhanVienDTO } from './NhanVienDTO';

export class  UserDTO {
    Id: string;
    UserName: string;
    Password: string;
    CreatedBy: string;
    CreatedDate?: Date;
    PasswordHash: string;
    Status: string;
    UpdatedBy: string;
    UpdatedDate ?: Date;
    MaNhanVien: string;
    NhanVien: NhanVienDTO;
    RoleIds: string[];
}
