import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
    isAuth = false;

    constructor(private us: UserService,private router: Router) { }

    logout() {
        this.us.logout();
        this.router.navigate(["/"]);
    }

    ngOnInit(): void {
        setTimeout(() => { this.isAuth = this.us.isAuth() }, 1000);
    }
}
