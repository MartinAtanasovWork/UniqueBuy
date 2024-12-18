import { Component, ViewChild } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothes-form',
  standalone: true,
  imports: [NavigationComponent, FormsModule],
  templateUrl: './clothes-form.component.html',
  styleUrl: './clothes-form.component.css'
})
export class ClothesFormComponent {
  materials = [
    "Cotton",
    "Linen",
    "Wool",
    "Silk",
    "Leather",
    "Denim"
  ]
  sizes = [
    "Small",
    "Medium",
    "Large",
    "Extra Large"
]

  @ViewChild("createItemForm") form: NgForm | undefined;

  constructor(private itemService:ItemService,private router: Router) { }

  formSubmitHandler() {
    this.itemService.createOne("clothes",this.form?.value).subscribe(data => {
      this.router.navigate(["/catalog/artwork"]);      
    })
  }
}
