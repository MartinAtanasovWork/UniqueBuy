import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork, Clothes, commonType, Furniture, Jewelry, Pottery } from '../main/types/item';
import { ItemService } from '../main/item.service';
import { ArtworkFormComponent } from "../create-item/artwork-form/artwork-form.component";
import { ClothesFormComponent } from '../create-item/clothes-form/clothes-form.component';
import { FurnitureFormComponent } from '../create-item/furniture-form/furniture-form.component';
import { JewelryFormComponent } from '../create-item/jewelry-form/jewelry-form.component';
import { PotteryFormComponent } from '../create-item/pottery-form/pottery-form.component';

@Component({
  selector: 'app-update-item',
  standalone: true,
  imports: [ArtworkFormComponent,ClothesFormComponent,FurnitureFormComponent,JewelryFormComponent,PotteryFormComponent],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent implements OnInit {
  itemJewelry: Jewelry | undefined = undefined;
  itemArtwork: Artwork | undefined = undefined;
  itemClothes: Clothes | undefined = undefined;
  itemPottery: Pottery | undefined = undefined;
  itemFurniture: Furniture | undefined = undefined;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    let params = this.route.snapshot.params;
    this.itemService.getOne(params['item'], params['id']).subscribe(item => {
      switch(params['item']){
        case "jewelry":
         this.itemJewelry = item as Jewelry;
         break;
         case "artwork":
         this.itemArtwork = item as Artwork;
         break;
         case "clothes":
         this.itemClothes = item as Clothes;
         break;
         case "pottery":
         this.itemPottery = item as Pottery;
         break;
         case "furniture":
         this.itemFurniture = item as Furniture;
         break;
      }
    })
  }
}
