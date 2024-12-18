import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artwork-form',
  standalone: true,
  imports: [NavigationComponent,FormsModule],
  templateUrl: './artwork-form.component.html',
  styleUrl: './artwork-form.component.css'
})
export class ArtworkFormComponent {
  artMediums = [
    "Oil Paint",
    "Acrylic Paint",
    "Watercolor",
    "Pastels",
    "Ink",
    "Digital Media",
    "Sculpture",
    "Textile Art"
];
artStyles = [
  "Realism",
  "Impressionism",
  "Expressionism",
  "Cubism",
  "Surrealism",
  "Abstract Art",
  "Pop Art",
  "Fauvism",
  "Art Nouveau",
  "Baroque",
  "Renaissance",
  "Gothic",
  "Minimalism",
  "Conceptual Art",
  "Street Art"
]

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

  constructor(private itemService: ItemService,private router: Router){}
  
    formSubmitHandler(){
      this.itemService.createOne("artwork",this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/artwork"]);       
      })      
    }
}
