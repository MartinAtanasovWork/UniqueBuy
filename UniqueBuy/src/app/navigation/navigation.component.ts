import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent{   
    constructor(private us: UserService,private router: Router) { }

    get isAuth(){
        return this.us.isAuth();
    }

    logout() {
        this.us.logout().subscribe(() => {
            this.router.navigate(["/"]);
        });        
    }
}
