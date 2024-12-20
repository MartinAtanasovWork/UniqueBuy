import { Injectable } from '@angular/core';
import { ServerResponse, User, UserInfo } from './types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { isErrorResponse } from './types/typeguards/user.typeguard';
import { commonTypeArray } from '../main/types/item';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user$$ = new BehaviorSubject<UserInfo | null>(null);
    private user$ = this.user$$.asObservable();

    user: UserInfo | null = null;
    url = "/api/artisan";

    constructor(private http: HttpClient) {
        this.user$.subscribe(user => {
            this.user = user;
        })
    }

    login(email: string, password: string) {
        return this.http.post<ServerResponse>(this.url + "/login", { email, password })
            .pipe(tap((response) => {
                if (!isErrorResponse(response)) this.user$$.next(response.artisan);
            }));
    }

    register(firstName: string, lastName: string, email: string, password: string,phoneNumber: string,specialty:string ) {
        return this.http.post<ServerResponse>(this.url + "/register", { firstName, lastName, email, password ,phoneNumber,specialty})
            .pipe(tap((response) => {
                if (!isErrorResponse(response)) this.user$$.next(response.artisan);
            }));
    }

    saveInfo(user: User) {
        this.user = user.artisan;
        localStorage.setItem("token", user['Auth-Token']);
    }

    isAuth() {
        return this.user ? true : false;
    }

    getUserInfo() {
        return this.http.get<UserInfo>(this.url)
            .pipe(tap((user) => this.user$$.next(user)));
    }
    logout() {
        this.user = null;
        return this.http.get(this.url + "/logout", {});
    }

    addToCart(item: string, id: string) {
        let data = [item, id];
        return this.http.post(this.url + '/cart', data);
    }
    getCartAsItems(){
        return this.http.get<commonTypeArray>(this.url + "/cart");
    }
    removeCartItem(id:string){
        return this.http.delete(this.url + "/cart/" + id);
    }
    renewInfo() {
        this.user$.subscribe(data => {
            this.user = data;
        })
    }
}
