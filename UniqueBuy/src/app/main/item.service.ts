import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commonType, commonTypeArray } from './types/item';

@Injectable({
    providedIn: 'root'
})
export class ItemService {   
    constructor(private http: HttpClient) { }

    getAll(item:string) {      
        return this.http.get<commonTypeArray>(`/api/${item}`);
    }

    getOne(item: string,id:string){
        return this.http.get<commonType>(`/api/${item}/${id}`);
    }

    createOne(item: string,data: commonType){
        return this.http.post<commonType>(`/api/${item}`,data);
    }
}
