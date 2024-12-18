import { Component } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Clothes } from '../../../types/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-clothes-details',
    standalone: true,
    imports: [NavigationComponent],
    templateUrl: './clothes-details.component.html',
    styleUrl: './clothes-details.component.css'
})
export class ClothesDetailsComponent {
    item: Clothes | undefined;
    user_id: string = "";

    constructor(private route: ActivatedRoute, private itemService: ItemService,private us: UserService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params["id"];

        this.itemService.getOne("clothes", id).subscribe(data => {
            this.item = data as Clothes;
        });
        this.user_id = this.us.user?._id ? this.us.user._id : "";
    }
}
