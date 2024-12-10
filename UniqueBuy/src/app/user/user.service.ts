import { Injectable } from '@angular/core';
import { User } from './types/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.USER_API_URL
    user: User | undefined;

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        let myheaders = new HttpHeaders();
        myheaders.append("Content-Type","application/json")

        this.http.post(
            this.url + "/login",
            {email,password},
            {
                headers:myheaders
            }
        ).subscribe(data => {
            console.log(data);
            
        })
    }

    register(firstName: string, lastName: string, email: string, password: string) {

    }
}
