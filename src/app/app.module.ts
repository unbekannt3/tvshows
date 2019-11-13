import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVShowsComponent } from './components/tvshows/tvshows.component';
import { AddShowComponent } from './components/add-show/add-show.component';
import { TVShowService } from './services/tvshow.service';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TVShowsComponent,
    AddShowComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TVShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
