import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { StarshipListItemComponent } from './starship-list-item/starship-list-item.component';
import { ErrorComponent } from './error/error.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { DataService } from './data.service';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StarshipListComponent,
    StarshipDetailsComponent,
    StarshipListItemComponent,
    ErrorComponent,
    PeopleDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'starships/:starshipName', component: StarshipDetailsComponent },
      { path: 'starships', component: StarshipListComponent },
      { path: 'people', component: PeopleListComponent },
      { path: 'people/:personName', component: PeopleDetailsComponent },
      { path: '', redirectTo: 'starships', pathMatch: 'full' }, // redirects to landing page
      { path: '**', component: ErrorComponent },
    ]),
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
