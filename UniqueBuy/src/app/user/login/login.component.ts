import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { UserService } from '../user.service';
import { isErrorResponse } from '../types/typeguards/user.typeguard';
import { ToastComponent } from '../../toast/toast.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, NavigationComponent,ToastComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    @ViewChild("loginForm") form: NgForm | undefined;

    showToast = false;
    toastMessage = "";
    toastType = "";

    constructor(private us: UserService,private router: Router) { }

    formSubmitHandler() {
        this.us.login(this.form?.value.email, this.form?.value.password).subscribe(response => {
            if(isErrorResponse(response)){                  
                this.showToast = true;
                this.toastType = "warning";
                this.toastMessage = response.error;                
            }else{
                this.us.saveInfo(response);      
                this.router.navigate(["/"]);               
            }
        });
    }

    hideToast(){
        this.showToast = false;
    }    
}
