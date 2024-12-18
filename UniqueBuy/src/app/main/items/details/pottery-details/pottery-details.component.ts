import { Component } from '@angular/core';
import { NavigationComponent } from '../../../../navigation/navigation.component';
import { Pottery } from '../../../types/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../item.service';
import { UserService } from '../../../../user/user.service';

@Component({
  selector: 'app-pottery-details',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './pottery-details.component.html',
  styleUrl: './pottery-details.component.css'
})
export class PotteryDetailsComponent {
  item: Pottery | undefined;
  user_id: string = "";

  constructor(private route: ActivatedRoute, private itemService: ItemService,private us: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];

    this.itemService.getOne("pottery", id).subscribe(data => {
      this.item = data as Pottery;
    })
    this.user_id = this.us.user?._id ? this.us.user._id : "";
  }
}
