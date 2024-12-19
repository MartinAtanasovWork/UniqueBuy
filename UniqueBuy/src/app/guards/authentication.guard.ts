import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { UserService } from "../user/user.service";

export const AuthenticationGuard: CanActivateFn = () => {
    const userService = inject(UserService);    
    return userService.isAuth();
}