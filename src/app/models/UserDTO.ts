import { KhachHangDTO } from './KhachHangDTO';
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
    MaKhachHang: string;
    KhachHang: KhachHangDTO;
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
