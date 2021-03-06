import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { HeroesComponent } from './heroes.component';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],

  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],

  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
