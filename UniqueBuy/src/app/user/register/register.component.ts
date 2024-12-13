import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { UserService } from '../user.service';
import { isErrorResponse } from '../types/typeguards/user.typeguard';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [FormsModule, NavigationComponent],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	@ViewChild("registerForm") form: NgForm | undefined;

	constructor(private us: UserService) { }

	formSubmitHandler() {
		this.us.register(this.form?.value.firstName, this.form?.value.lastName, this.form?.value.email, this.form?.value.password).subscribe(response => {
			if(isErrorResponse(response)){  
                console.log(response.error); 

            }else{
                console.log(response['Auth-Token']);                
            }
		});
	}
}
