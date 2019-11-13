import { Injectable } from '@angular/core';
import { TVShow } from '../model/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TVShowService {

  private showList: TVShow[] = [];

  constructor() {
    this.showList.push(new TVShow(1, 'KP'));
    this.showList.push(new TVShow(2, 'Das Film'));
    this.showList.push(new TVShow(3, 'Der Serie'));

  }

  get shows() {
    return this.showList;
  }

  addShow(tvs: TVShow) {
    this.showList.push(tvs);
  }

  deleteShow(tvs: TVShow) {
    this.showList = this.showList.filter(sle => tvs !== sle);
  }

}
