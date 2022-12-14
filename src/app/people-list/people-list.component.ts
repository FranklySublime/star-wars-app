import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent {
  constructor(public dataService: DataService) {}
}
