import { Component, Input } from '@angular/core';
import { Starship } from '../interfaces';

@Component({
  selector: 'app-starship-list-item',
  templateUrl: './starship-list-item.component.html',
  styleUrls: ['./starship-list-item.component.css'],
})
export class StarshipListItemComponent {
  @Input() item!: Starship;
}
