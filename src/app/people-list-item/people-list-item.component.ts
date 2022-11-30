import { Component, Input } from '@angular/core';
import { People } from '../interfaces';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.css'],
})
export class PeopleListItemComponent {
  @Input() item!: People;
}
