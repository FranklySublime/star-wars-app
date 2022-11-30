import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Starship } from '../interfaces';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css'],
})
export class StarshipListComponent {
  constructor(public dataService: DataService) {}
}
