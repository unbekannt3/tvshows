import { Component, OnInit } from '@angular/core';
import { TVShowService } from '../../services/tvshow.service';
import { TVShow } from '../../model/tvshow';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss']
})
export class AddShowComponent implements OnInit {

  public tempShow: TVShow = new TVShow(null, null);

  constructor(
    public tvShowService: TVShowService
  ) { }

  add() {
    this.tvShowService.addShow(new TVShow(this.tempShow.id, this.tempShow.name));
    this.tempShow.id = null;
    this.tempShow.name = null;
  }

  ngOnInit() {
  }

}
