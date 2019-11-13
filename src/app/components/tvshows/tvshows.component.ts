import { Component, OnInit } from '@angular/core';
import { TVShowService } from '../../services/tvshow.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TVShowsComponent implements OnInit {

  constructor(
    private tvShowService: TVShowService
  ) { }

  get shows() {
    return this.tvShowService.shows;
  }

  ngOnInit() {
  }

}
