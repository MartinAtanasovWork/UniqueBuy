import { Component } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Pottery } from '../../../types/item';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-pottery-details',
    standalone: true,
    imports: [NavigationComponent, RouterLink],
    templateUrl: './pottery-details.component.html',
    styleUrl: './pottery-details.component.css'
})
export class PotteryDetailsComponent {
    item: Pottery | undefined;
    user_id: string = "";
    cart: String[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService, private us: UserService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params["id"];

        this.itemService.getOne("pottery", id).subscribe(data => {
            this.item = data as Pottery;
        })
        this.user_id = this.us.user?._id ? this.us.user._id : "";
        this.us.user?.cart.forEach(element => {
            this.cart.push(element[1]);
        });
    }

    delete() {
        if (confirm("Are you sure you want to delete this item?")) {
            this.itemService.deleteOne("pottery", this.item?._id!).subscribe(res => {
                this.router.navigate(["/catalog/pottery"]);
            });
        }
    }
    addToCart() {
        this.us.addToCart("pottery", this.item?._id!).subscribe(req => {
            this.router.navigate(["/artisan/cart"]);
            this.us.getUserInfo().subscribe(data => this.us.renewInfo());    
        });
    }
}
