import { HttpClient } from '@angular/common/http';
import { Starship, SwapiResponse, People } from './interfaces';

import { Observable, map, expand, reduce, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'https://swapi.dev/api/';
  starships: Starship[] = [];
  people: People[] = [];
  loading: boolean = false;

  // starship!: Starship;
  // starship: Subject<Starship> = new Subject<Starship>();

  constructor(private http: HttpClient) {
    // initialize starships on load at the service/provider level

    // setting all starships
    this.getStarships().subscribe((data) => {
      console.log(data);
      this.starships = data;
    });

    // setting all people
    this.getPeople().subscribe((data) => {
      this.people = data;
      this.loading = true;
      console.log(data);
      console.log(this.loading);
    });
  }

  getStarships(): Observable<Starship[]> {
    return this.getStarshipsRequest(`${this.baseUrl}starships/`).pipe(
      expand((response: SwapiResponse<Starship>) => {
        console.log(response);
        if (response && response.next) {
          console.log(response.next);
          return this.getStarshipsRequest(response.next);
        } else {
          return EMPTY;
        }
      }),
      map((obj) => obj.results),
      reduce((acc: Starship[], data: Starship[]) => acc.concat(data), [])
    );
  }

  // returning one starship in an array to make use of Angular's ngFor directive
  getStarship(starshipRoute: string | null): Starship[] {
    return this.starships.filter((starship) => starship.name === starshipRoute); // expected array lenght of 1
  }

  getPilots(starship: Starship): People[] {
    const { pilots } = starship;
    return this.people.filter((person) => {
      return pilots.includes(person.url);
    });
  }

  getPeople(): Observable<People[]> {
    return this.getPeopleRequest(`${this.baseUrl}people/`).pipe(
      expand((response: SwapiResponse<People>) => {
        console.log(response);
        if (response && response.next) {
          console.log(response.next);
          return this.getPeopleRequest(response.next);
        } else {
          return EMPTY;
        }
      }),
      map((obj) => obj.results),
      reduce((acc: People[], data: People[]) => acc.concat(data), [])
    );
  }

  // returning one person in an array to make use of Angular's ngFor directive
  getPerson(personRoute: string | null): People[] {
    return this.people.filter((person) => person.name === personRoute); //expected array length of 1
  }

  getStarshipsRequest(url: string) {
    return this.http.get<SwapiResponse<Starship>>(url);
  }

  getPeopleRequest(url: string) {
    return this.http.get<SwapiResponse<People>>(url);
  }
}
