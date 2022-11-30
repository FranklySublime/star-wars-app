import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Starship, People } from '../interfaces';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
})
// export class StarshipDetailsComponent {
export class StarshipDetailsComponent implements OnInit {
  routeParams!: ParamMap;
  starshipNameFromRoute: string | null = '';
  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  ngOnInit(): void {
    // getting the starship name from the current route
    this.routeParams = this.route.snapshot.paramMap;
    console.log(this.routeParams);
    this.starshipNameFromRoute = this.routeParams.get('starshipName');

    // console.log(starshipNameFromRoute);
    // Find the starship that corresponds with the name of the route

    // !!!!might need to move this up to the service as it's own method!!!! //
    // this.starshipService.starship = this.starshipService.starships.filter(
    //   (starship) => starship.name === starshipNameFromRoute
    // )[0];

    // this.starship = this.starshipService.getStarship(starshipNameFromRoute);

    // console.log(this.starship);
    // !!!!might need to move this up to the service as it's own method!!!! //
    // this.pilots = this.starshipService.people.filter((person) => {
    //   return this.starship.pilots.includes(person.url);
    // });
  }
}
