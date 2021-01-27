import { Component, OnInit } from '@angular/core';
import { TVShowService } from '../../services/tvshow.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  constructor(
    private tvShowService: TVShowService
  ) { }

  get show() {

    return this.tvShowService.currentShow;
  }


  ngOnInit() {
  }

}
