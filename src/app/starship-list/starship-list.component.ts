import { Component } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css'],
})
export class StarshipListComponent {
  constructor(public dataService: DataService) {}
}
