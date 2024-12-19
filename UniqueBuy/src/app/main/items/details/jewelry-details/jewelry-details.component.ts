import { Component, OnInit } from '@angular/core';
import { Jewelry } from '../../../types/item';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ItemService } from '../../../item.service';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-jewelry-details',
    standalone: true,
    imports: [NavigationComponent,RouterLink],
    templateUrl: './jewelry-details.component.html',
    styleUrl: './jewelry-details.component.css'
})
export class JewelryDetailsComponent implements OnInit{
    item: Jewelry | undefined;
    user_id: string = "";
    cart:String[] = [];
    constructor(private route: ActivatedRoute,private router: Router, private itemService: ItemService,private us: UserService) { }

    ngOnInit(): void {
        let id  = this.route.snapshot.params["id"];
        
        this.itemService.getOne("jewelry",id).subscribe(data => {
            this.item = data as Jewelry;  
        })
        this.user_id = this.us.user?._id ? this.us.user._id : "";
        this.user_id = this.us.user?._id ? this.us.user._id : "";
        this.us.user?.cart.forEach(element => {
            this.cart.push(element[1]);
        });
    }

    delete() {
        if (confirm("Are you sure you want to delete this item?")) {
            this.itemService.deleteOne("jewelry", this.item?._id!).subscribe(res => {
                this.router.navigate(["/catalog/jewelry"]);
            });
        }
    }
    addToCart(){
        this.us.addToCart("jewelry",this.item?._id!).subscribe(req => {
            this.router.navigate(["/artisan/cart"]);
            this.us.getUserInfo().subscribe(data => this.us.renewInfo());              
        });
    }
}
