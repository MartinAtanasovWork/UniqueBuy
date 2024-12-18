import { Component, Input } from '@angular/core';
import { commonType } from '../../types/item';
import { ShortenPipe } from '../../../shared/pipes/shorten.pipe';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [ShortenPipe,JsonPipe,RouterLink],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css'
})
export class ArticleComponent {
    @Input() item: commonType | undefined = undefined;
}
