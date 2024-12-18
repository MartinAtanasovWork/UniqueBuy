import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Artwork } from '../../../types/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-artwork-details',
    standalone: true,
    imports: [NavigationComponent],
    templateUrl: './artwork-details.component.html',
    styleUrl: './artwork-details.component.css'
})
export class ArtworkDetailsComponent implements OnInit{
    item: Artwork | undefined;
    user_id: string = ""; 

    constructor(private route: ActivatedRoute, private itemService: ItemService,private us: UserService) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params["id"];

        this.itemService.getOne("artwork", id).subscribe(data => {
            this.item = data as Artwork;
        });
        this.user_id = this.us.user?._id ? this.us.user._id : "";
    }
}
