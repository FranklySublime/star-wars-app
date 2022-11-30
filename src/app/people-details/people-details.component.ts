import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { People } from '../interfaces';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent implements OnInit {
  // person!: People;

  routeParams!: ParamMap;
  personNameFromRoute: string | null = '';
  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  ngOnInit(): void {
    this.routeParams = this.route.snapshot.paramMap;
    this.personNameFromRoute = this.routeParams.get('personName');
    console.log(this.personNameFromRoute);
    // Find the starship that corresponds with the name of the route

    // will need to move this as it's own method at the service level
    //   this.person = this.dataService.people.filter(
    //     (starship) => starship.name === personNameFromRoute
    //   )[0];
  }
}
