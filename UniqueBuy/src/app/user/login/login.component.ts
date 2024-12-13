import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { UserService } from '../user.service';
import { isErrorResponse } from '../types/typeguards/user.typeguard';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, NavigationComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    @ViewChild("loginForm") form: NgForm | undefined;

    constructor(private us: UserService) { }

    formSubmitHandler() {
        this.us.login(this.form?.value.email, this.form?.value.password).subscribe(response => {
            if(isErrorResponse(response)){  
                console.log(response.error);                
            }else{
                console.log(response.artisan);                
            }
        });
    }
}
