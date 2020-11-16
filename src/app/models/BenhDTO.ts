
import { ThuocDTO } from './ThuocDTO';
import { TrieuChungDTO } from './TrieuChungDTO';

export class  BenhDTO {
    MaBenh: string;
    TenBenh: string;
    NguyenNhan: string;
    CachDieuTri: string;
    MoTa: string;
    HinhAnh: string;
    ListThuocs: ThuocDTO[];
    MaThuocs: string[];
    ListTrieuChungs: TrieuChungDTO[];
    MaTrieuChungs: string[];
}
