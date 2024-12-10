import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NavigationComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild("registerForm") form: NgForm | undefined; 

  formSubmitHandler(){
    console.log(this.form);    
  }    
}
