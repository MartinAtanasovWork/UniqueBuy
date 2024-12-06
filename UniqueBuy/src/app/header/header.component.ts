import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderContentComponent } from './header-content/header-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent,HeaderContentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
