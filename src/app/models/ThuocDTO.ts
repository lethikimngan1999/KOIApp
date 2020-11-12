import { BenhDTO } from './BenhDTO';
import { LieuTrinhDTO } from './LieuTrinhDTO';
export class ThuocDTO {
    MaThuoc: string;
    TenThuoc: string;
    CongDung: string;
    CachDung: string;
    LuuY: string;
    HinhAnh: string;
    ListBenhs: BenhDTO[];
    MaBenhs: string[];
    ListLieuTrinhs: LieuTrinhDTO[];
    MaLieuTrinhs: string[];
}
