import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Artwork } from '../../../types/item';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-artwork-details',
    standalone: true,
    imports: [NavigationComponent,RouterLink],
    templateUrl: './artwork-details.component.html',
    styleUrl: './artwork-details.component.css'
})
export class ArtworkDetailsComponent implements OnInit {
    item: Artwork | undefined;
    user_id: string = "";
    cart:String[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService, private us: UserService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params["id"];

        this.itemService.getOne("artwork", id).subscribe(data => {
            this.item = data as Artwork;
        });
        this.user_id = this.us.user?._id ? this.us.user._id : "";
        this.us.user?.cart.forEach(element => {
            this.cart.push(element[1]);
        });
    }

    delete() {
        if (confirm("Are you sure you want to delete this item?")) {
            this.itemService.deleteOne("artwork", this.item?._id!).subscribe(res => {
                this.router.navigate(["/catalog/artwork"]);
            });
        }
    }

    addToCart(){
        this.us.addToCart("artwork",this.item?._id!).subscribe(req => {
            this.router.navigate(["/artisan/cart"]);
            this.us.getUserInfo().subscribe(data => this.us.renewInfo());                     
        });
    }
}
