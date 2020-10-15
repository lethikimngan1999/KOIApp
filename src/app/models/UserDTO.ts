import { NhanVienDTO } from './NhanVienDTO';
import { RoleDTO } from './RoleDTO';
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
    ListRoles: RoleDTO[];
    RoleIds: string[];
}

export class UserChangePasswordDTO {
    UserId: string;
    oldPassword: string;
    newPassword: string;
}
