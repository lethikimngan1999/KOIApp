import { LieuTrinhDTO } from './LieuTrinhDTO';
import { ThuocDTO } from './ThuocDTO';

export class  BenhDTO {
    MaBenh: string;
    TenBenh: string;
    NguyenNhan: string;
    CachDieuTri: string;
    MoTa: string;
    ListThuocs: ThuocDTO[];
    MaThuocs: string[];
    ListLieuTrinhs: LieuTrinhDTO[];
    MaLieuTrinhs: string[];
}
