import { Component, Input } from '@angular/core';
import { JewelrySearchComponent } from './jewelry-search/jewelry-search.component';
import { ArtworkSearchComponent } from './artwork-search/artwork-search.component';
import { ClothesSearchComponent } from './clothes-search/clothes-search.component';
import { PotterySearchComponent } from './pottery-search/pottery-search.component';
import { FurnitureSearchComponent } from './furniture-search/furniture-search.component';

@Component({
  selector: 'app-search-options',
  standalone: true,
  imports: [JewelrySearchComponent,ArtworkSearchComponent,ClothesSearchComponent,PotterySearchComponent,FurnitureSearchComponent],
  templateUrl: './search-options.component.html',
  styleUrl: './search-options.component.css'
})
export class SearchOptionsComponent {
    @Input() item:string = "";
}
