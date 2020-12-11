import { NhanVienDTO } from '.';
import { RoleDTO } from './RoleDTO';

export class TaiKhoanKhachHangDTO {
    //khachhang
    MaKhachHang: string;
    HoLot: string;
    TenKhachhang: string;
    DiaChi: string;
    TinhTP: string;
    Sdt: string;
    Email: string;
    GhiChu: string;
    //end
    // tai khoan
    Id: string;
    UserName: string;
    Password: string;
    CreatedBy: string;
    CreatedDate?: Date;
    PasswordHash: string;
    Status: string;
    UpdatedBy: string;
    UpdatedDate?: Date;
    MaNhanVien: string;
    NhanVien: NhanVienDTO;
    ListRoles: RoleDTO[];
    RoleIds: string[];
}