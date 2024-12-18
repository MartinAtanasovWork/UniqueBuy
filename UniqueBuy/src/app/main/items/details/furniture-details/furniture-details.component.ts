import { Component } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Furniture } from '../../../types/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-furniture-details',
    standalone: true,
    imports: [NavigationComponent],
    templateUrl: './furniture-details.component.html',
    styleUrl: './furniture-details.component.css'
})
export class FurnitureDetailsComponent {
    item: Furniture | undefined;
    user_id: string = "";

    constructor(private route: ActivatedRoute, private itemService: ItemService,private us: UserService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params["id"];

        this.itemService.getOne("furniture", id).subscribe(data => {
            this.item = data as Furniture;
        })
        this.user_id = this.us.user?._id ? this.us.user._id : "";
    }
}
