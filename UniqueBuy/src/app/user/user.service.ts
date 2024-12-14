import { Injectable } from '@angular/core';
import { ServerResponse, User, UserInfo } from './types/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: UserInfo | undefined;
    url = environment.API_URL + "artisan";
    headers = new HttpHeaders();

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        this.headers = this.headers.append("Content-Type", "application/json");

        return this.http.post<ServerResponse>(
            this.url + "/login",
            { email, password },
            {
                headers: this.headers
            }
        );
    }

    register(firstName: string, lastName: string, email: string, password: string) {
        this.headers = this.headers.append("Content-Type", "application/json");

        return this.http.post<ServerResponse>(
            this.url + "/register",
            { firstName, lastName, email, password },
            {
                headers: this.headers
            }
        );
    }

    saveInfo(user: User) {
        this.user = user.artisan;
        localStorage.setItem("token", user['Auth-Token']);
    }

    isAuth() {
        if (this.user && localStorage.getItem("token")) {
            return true;
        } else {
            return false;
        }
    }

    getUserInfo() {
        let token = localStorage.getItem("token");

        if (token) {
            this.headers = this.headers.append("Auth-Token", token);         
          
            this.http.get<UserInfo>(this.url, {
                headers: this.headers
            }).subscribe(data => {
                this.user = data;
            })
        }
    }

    logout(){
        let token = localStorage.getItem("token") || "";

        this.headers = this.headers.append("Auth-Token",token);

        this.http.get(this.url + "/logout",{
            headers: this.headers
        })

        this.user = undefined;
        localStorage.removeItem("token");
    }
}
