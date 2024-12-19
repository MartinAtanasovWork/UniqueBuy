import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ItemService } from '../../main/item.service';
import { Router } from '@angular/router';
import { Artwork } from '../../main/types/item';

@Component({
  selector: 'app-artwork-form',
  standalone: true,
  imports: [NavigationComponent, FormsModule],
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
  @Input() item: Artwork = {} as Artwork;
  constructor(private itemService: ItemService, private router: Router) { }

  formSubmitHandler() {
    if (this.item._id) {
      this.itemService.updateOne("artwork",this.item._id,this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/artwork",this.item._id]);
      });
    } else {
      this.itemService.createOne("artwork", this.form?.value).subscribe(data => {
        this.router.navigate(["/catalog/artwork", data._id]);
      })
    }
  }
}
