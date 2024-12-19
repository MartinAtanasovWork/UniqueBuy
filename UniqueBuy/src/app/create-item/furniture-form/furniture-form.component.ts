import { Component, Input, ViewChild } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';
import { Furniture } from '../../main/types/item';

@Component({
  selector: 'app-furniture-form',
  standalone: true,
  imports: [NavigationComponent, FormsModule],
  templateUrl: './furniture-form.component.html',
  styleUrl: './furniture-form.component.css'
})
export class FurnitureFormComponent {
  materials = [
    "Wood",
    "Metal",
    "Glass",
    "Leather",
    "Stone",
    "Veneer",
    "MDF (Medium Density Fiberboard)"
  ]
  types = [
    "Sofas",
    "Chairs",
    "Tables",
    "Bookshelves",
    "Dressers",
    "Cabinets",
    "Beds",
    "Wardrobes",
    "Desks"
  ]

  @ViewChild("createItemForm") form: NgForm | undefined;
  @Input() item: Furniture = {} as Furniture;
  constructor(private itemService: ItemService, private router: Router) { }

  formSubmitHandler() {
    if (this.item._id) {
      this.itemService.updateOne("furniture",this.item._id,this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/furniture",this.item._id]);
      });
    } else {
      this.itemService.createOne("furniture", this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/furniture", data._id]);
      })
    }
  }
}
