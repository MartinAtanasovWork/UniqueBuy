import { Component, ViewChild } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-form',
  standalone: true,
  imports: [NavigationComponent,FormsModule],
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
     
      constructor(private itemService: ItemService,private router:Router){}
    
      formSubmitHandler(){
        let data = {...this.form?.value,assembly_required: this.form?.value.assembly_required == "true" ? true:false};
        this.itemService.createOne("furniture",data).subscribe(data => {
          this.router.navigate(["/catalog/furniture"]);
        })      
      }
}
