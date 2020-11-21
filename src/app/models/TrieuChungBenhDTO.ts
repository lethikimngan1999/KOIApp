import { BenhDTO } from './BenhDTO';
import { TrieuChungDTO } from './TrieuChungDTO';

export class TrieuChungBenhDTO {
    MaBenh: string;
   
    MaTrieuChung: string;
  
    Benh: BenhDTO[];
    TrieuChung: TrieuChungDTO[];
}



export class SearchDTO {
    search: string;
}
