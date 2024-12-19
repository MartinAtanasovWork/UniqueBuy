import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { UserInfo } from '../user/types/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user:UserInfo = {} as UserInfo;

  constructor(private us:UserService){}

  ngOnInit(): void {
    this.user = this.us.user!; 
  }
}
