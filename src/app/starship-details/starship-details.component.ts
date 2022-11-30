import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
})
export class StarshipDetailsComponent implements OnInit {
  routeParams!: ParamMap;
  starshipNameFromRoute: string | null = '';
  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  ngOnInit(): void {
    // getting the starship name from the current route
    this.routeParams = this.route.snapshot.paramMap;
    console.log(this.routeParams);
    this.starshipNameFromRoute = this.routeParams.get('starshipName');
  }
}
