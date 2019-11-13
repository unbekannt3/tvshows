import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [TVShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
