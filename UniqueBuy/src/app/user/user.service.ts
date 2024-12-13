import { Injectable } from '@angular/core';
import { ServerResponse } from './types/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.API_URL + "artisan";
    headers = new HttpHeaders();

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        this.headers.append("Content-Type", "application/json");
                
        return this.http.post<ServerResponse>(
            this.url + "/login",
            { email, password },
            {
                headers: this.headers
            }
        );
    }

    register(firstName: string, lastName: string, email: string, password: string) {
        this.headers.append("Content-Type", "application/json");
                
        return this.http.post<ServerResponse>(
            this.url + "/register",
            { firstName,lastName, email, password },
            {
                headers: this.headers
            }
        );
    }
}
