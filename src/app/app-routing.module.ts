import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShowComponent } from './components/add-show/add-show.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { TVShowsComponent } from './components/tvshows/tvshows.component';


const routes: Routes = [

  {
    path: 'list',
    component: TVShowsComponent
  },
  {
    path: 'add',
    component: AddShowComponent
  },
  {
    path: 'showdetails',
    component: ShowDetailsComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
