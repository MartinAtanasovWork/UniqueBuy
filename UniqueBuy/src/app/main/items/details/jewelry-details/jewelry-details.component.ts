import { Component, OnInit } from '@angular/core';
import { Jewelry } from '../../../types/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../item.service';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { UserService } from '../../../../user/user.service';

@Component({
    selector: 'app-jewelry-details',
    standalone: true,
    imports: [NavigationComponent],
    templateUrl: './jewelry-details.component.html',
    styleUrl: './jewelry-details.component.css'
})
export class JewelryDetailsComponent implements OnInit{
    item: Jewelry | undefined;
    user_id: string = "";

    constructor(private route: ActivatedRoute, private itemService: ItemService,private us: UserService) { }

    ngOnInit(): void {
        let id  = this.route.snapshot.params["id"];
        
        this.itemService.getOne("jewelry",id).subscribe(data => {
            this.item = data as Jewelry;  
        })
        this.user_id = this.us.user?._id ? this.us.user._id : "";
    }
}
