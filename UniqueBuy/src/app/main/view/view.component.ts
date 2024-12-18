import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';
import { SearchOptionsComponent } from '../items/search-options/search-options.component';
import { ArticleComponent } from '../items/article/article.component';
import { commonTypeArray } from '../types/item';
import { ItemService } from '../item.service';

@Component({
    selector: 'app-view',
    standalone: true,
    imports: [NavigationComponent, SearchOptionsComponent, ArticleComponent],
    templateUrl: './view.component.html',
    styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
    items: commonTypeArray | null = null;
    item = '';
    constructor(private route: ActivatedRoute, private itemService: ItemService) { }

    ngOnInit(): void {
        this.item = this.route.snapshot.params["item"];

        this.itemService.getAll(this.item).subscribe(data => this.items = data);
    }
}
