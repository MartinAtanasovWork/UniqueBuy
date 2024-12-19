import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { UserService } from '../user/user.service';
import { commonTypeArray } from '../main/types/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items: commonTypeArray = [];
  constructor(private us:UserService){}

  ngOnInit(): void {
      this.us.getCartAsItems().subscribe(data => {
        this.items = data;        
      })
  }
  removeItem(id:string){
      this.us.removeCartItem(id).subscribe(data => {
        this.us.getUserInfo().subscribe(data =>{
          this.us.renewInfo();
          this.us.getCartAsItems().subscribe(data => {
            this.items = data;
          })
        })       
      });

  }
}
