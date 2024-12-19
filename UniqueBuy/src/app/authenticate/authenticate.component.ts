import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent implements OnInit{
  isAuthenticating = true;

  constructor(private us: UserService){}

  ngOnInit(): void {
      this.us.getUserInfo().subscribe({
        next: () => {
          this.isAuthenticating = false;
          this.us.renewInfo();
        },
        error: () => {
          this.isAuthenticating = false;
          this.us.renewInfo();
        },
        complete: () => {
          this.isAuthenticating = false;
          this.us.renewInfo();
        }
      })    
  }
}
