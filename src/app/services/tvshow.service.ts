import { Injectable } from '@angular/core';
import { TVShow } from '../model/tvshow';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TVShowService {

  private showList: TVShow[] = [];
  private currentActiveShow: TVShow;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.showList.push(new TVShow('Breaking Bad'));
    this.showList.push(new TVShow('Colony'));

  }

  get shows() {
    return this.showList;
  }

  get currentShow() {
    return this.currentActiveShow;
  }

  addShow(tvs: TVShow) {
    this.showList.push(tvs);
  }

  deleteShow(tvs: TVShow) {
    this.showList = this.showList.filter(sle => tvs !== sle);
  }

  async showDetails(tvs: TVShow) {
    const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + tvs.name).toPromise();
    tvs.coverURL = data['image']['medium'];
    tvs.summary = data['summary'];

    this.currentActiveShow = tvs;

    this.router.navigate(['/showdetails']);
  }

}
