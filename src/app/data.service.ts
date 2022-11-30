import { HttpClient } from '@angular/common/http';
import { Observable, map, expand, reduce, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

import { Starship, SwapiResponse, People } from './interfaces';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = `${environment.apiUrl}`;
  starships: Starship[] = [];
  people: People[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
    // initialize starships on load at the service/provider level

    // setting all starships
    this.getStarships().subscribe((data) => {
      this.starships = data;
    });

    // setting all people
    this.getPeople().subscribe((data) => {
      this.people = data;
      this.loading = true;
    });
  }

  getStarships(): Observable<Starship[]> {
    return this.getStarshipsRequest(`${this.baseUrl}starships/`).pipe(
      expand((response: SwapiResponse<Starship>) => {
        if (response && response.next) {
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
        if (response && response.next) {
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

  getStarshipsForPerson(person: People) {
    const { starships } = person;
    return this.starships.filter((starship) => {
      return starships.includes(starship.url);
    });
  }

  // http requests to api are listed below
  // each for the starships and people GET endpoints respectively

  getStarshipsRequest(url: string) {
    return this.http.get<SwapiResponse<Starship>>(url);
  }

  getPeopleRequest(url: string) {
    return this.http.get<SwapiResponse<People>>(url);
  }
}
