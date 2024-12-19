import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';
import { Pottery } from '../../main/types/item';

@Component({
  selector: 'app-pottery-form',
  standalone: true,
  imports: [NavigationComponent,FormsModule],
  templateUrl: './pottery-form.component.html',
  styleUrl: './pottery-form.component.css'
})
export class PotteryFormComponent {
  materials = [
    "Clay",
    "Slip",
    "Glaze",
    "Stone",
    "Bone China",
    "Terracotta",
    "Wood",
    "Metal",
    "Glass"
]
use = [
  "Functional Pottery",
  "Decorative Pottery",
  "Tableware",
  "Vases",
  "Urns",
  "Cookware",
  "Bathware"
]

  @ViewChild("createItemForm") form: NgForm | undefined;
  @Input() item: Pottery = {} as Pottery;
  constructor(private itemService: ItemService,private router: Router) { }

    
  formSubmitHandler() {
    if (this.item._id) {
      this.itemService.updateOne("pottery",this.item._id,this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/pottery",this.item._id]);
      });
    } else {
      this.itemService.createOne("pottery", this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/pottery", data._id]);
      })
    }
  }
}
