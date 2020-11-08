import { ChatLuongDTO } from './ChatLuongDTO';
import { ChungLoaiDTO } from './ChungLoaiDTO';
import { GiongDTO } from './GiongDTO';

export class BienTheDTO {
    MaBienThe: string;
    TenBienThe: string;
    MauSac: string;
    TinhTrang: boolean;
    MoTa: string;

    MaGiong: string;
    MaChatLuong: string;
    MaChungLoai: string;
    Giong: GiongDTO;
    ChatLuong: ChatLuongDTO;
    ChungLoai: ChungLoaiDTO;
}
