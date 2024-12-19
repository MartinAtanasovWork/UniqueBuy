import { Component } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Clothes } from '../../../types/item';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-clothes-details',
    standalone: true,
    imports: [NavigationComponent,RouterLink],
    templateUrl: './clothes-details.component.html',
    styleUrl: './clothes-details.component.css'
})
export class ClothesDetailsComponent {
    item: Clothes | undefined;
    user_id: string = "";
    cart:String[] = [];

    constructor(private route: ActivatedRoute,private router:Router, private itemService: ItemService,private us: UserService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params["id"];

        this.itemService.getOne("clothes", id).subscribe(data => {
            this.item = data as Clothes;
        });
        this.user_id = this.us.user?._id ? this.us.user._id : "";
        this.us.user?.cart.forEach(element => {
            this.cart.push(element[1]);
        });
    }

    delete() {
        if (confirm("Are you sure you want to delete this item?")) {
            this.itemService.deleteOne("clothes", this.item?._id!).subscribe(res => {
                this.router.navigate(["/catalog/clothes"]);
            });
        }
    }
    addToCart(){
        this.us.addToCart("clothes",this.item?._id!).subscribe(req => {
            this.router.navigate(["/artisan/cart"]);
            this.us.getUserInfo().subscribe(data => this.us.renewInfo());               
        });
    }
}
