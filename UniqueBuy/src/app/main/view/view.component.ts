import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
        const item = this.route.snapshot.params["item"];

        console.log(item);
        
    }
}
