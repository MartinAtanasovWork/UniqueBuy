import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';

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

  constructor(private itemSevice: ItemService,private router: Router) { }

    
  formSubmitHandler() {
    let data = {...this.form?.value,customizable: this.form?.value.customizable == "true"?true:false};
    this.itemSevice.createOne("pottery",data).subscribe(res => {
      this.router.navigate(["/catalog/pottery"]);      
    })
  }
}
