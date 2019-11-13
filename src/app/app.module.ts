import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVShowsComponent } from './components/tvshows/tvshows.component';
import { AddShowComponent } from './components/add-show/add-show.component';
import { TVShowService } from './services/tvshow.service';

@NgModule({
  declarations: [
    AppComponent,
    TVShowsComponent,
    AddShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TVShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
