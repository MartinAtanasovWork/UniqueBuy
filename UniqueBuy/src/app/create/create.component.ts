import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NavigationComponent,RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
