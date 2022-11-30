import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { ErrorComponent } from './error/error.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { DataService } from './data.service';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StarshipListComponent,
    StarshipDetailsComponent,
    ErrorComponent,
    PeopleDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StarshipListComponent },
      { path: 'starships/:starshipName', component: StarshipDetailsComponent },
      { path: 'people/:personName', component: PeopleDetailsComponent },
      { path: '**', component: ErrorComponent },
    ]),
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
