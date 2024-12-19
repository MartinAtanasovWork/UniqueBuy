import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ItemService } from '../../main/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Jewelry } from '../../main/types/item';

@Component({
  selector: 'app-jewelry-form',
  standalone: true,
  imports: [FormsModule,NavigationComponent],
  templateUrl: './jewelry-form.component.html',
  styleUrl: './jewelry-form.component.css'
})
export class JewelryFormComponent {
    materials = [
      "Gold",
      "Silver",
      "Platinum",
      "Stainless Steel",
      "Leather",
      "Wood",
      "Glass",
      "Ceramic",
      "Plastic",
      "Fabric"
  ];
  jewelryTypes = [
    "Necklaces",
    "Earrings",
    "Bracelets",
    "Rings",
    "Brooches",
    "Anklets",
    "Body Jewelry",
    "Cufflinks",
    "Tiaras",
    "Charms"
  ];
  gemstones = [
    "Diamond",
    "Ruby",
    "Emerald",
    "Sapphire",
    "Amethyst",
    "Topaz",
    "Opal",
    "Moonstone"
  ]
    @ViewChild("createItemForm") form: NgForm | undefined;   
    @Input() item: Jewelry = {} as Jewelry;
    constructor(private itemService: ItemService,private router: Router){}
  
    formSubmitHandler(){
      if (this.item._id) {
        this.itemService.updateOne("jewelry",this.item._id,this.form?.value).subscribe(data => {
          this.router.navigate(["/catalog/jewelry",this.item._id]);
        });
      } else {
        this.itemService.createOne("jewelry", this.form?.value).subscribe(data => {
          this.router.navigate(["/catalog/jewelry", data._id]);
        })
      }      
    }
}
