import { TheoDoiThongTinDTO } from "./TheoDoiThongTinDTO";

export class KhachHangDTO {
    MaKhachHang  : string;
    HoLot  : string;

    TenKhachhang  : string;

    DiaChi  : string;

    TinhTP  : string;

    Sdt  : string;

    Email  : string;

    GhiChu  : string;
    ListThongTins: TheoDoiThongTinDTO[];
    MaThongTins: string[];
    
}