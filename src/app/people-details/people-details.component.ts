import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent implements OnInit {
  routeParams!: ParamMap;
  personNameFromRoute: string | null = '';
  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  ngOnInit(): void {
    // Find the starship param from the current route
    this.routeParams = this.route.snapshot.paramMap;
    this.personNameFromRoute = this.routeParams.get('personName');
    console.log(this.personNameFromRoute);
  }
}
