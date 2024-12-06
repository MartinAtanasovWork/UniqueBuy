import { Component } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CatalogComponent, NavigationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
