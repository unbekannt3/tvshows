import { Injectable } from '@angular/core';
import { TVShow } from '../model/tvshow';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TVShowService {

  private showList: Observable<any>;
  private currentActiveShow: TVShow;

  constructor(
    public http: HttpClient,
    public fireStore: AngularFirestore
  ) {
    this.showList = fireStore.collection('shows').valueChanges({ idField: 'id' });
  }

  get shows(): Observable<TVShow[]> {
    return this.showList;
  }

  get currentShow() {
    return this.currentActiveShow;
  }

  async addShow(tvs: TVShow) {

    const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + tvs.name).toPromise();
    tvs.name = data['name'];
    tvs.coverURL = data['image']['medium'];
    tvs.summary = data['summary'];


    // this.showList.push(tvs);
    this.fireStore.collection('shows').add({
      name: tvs.name,
      coverURL: tvs.coverURL,
      summary: tvs.summary
    });
  }

  deleteShow(tvs: TVShow) {
    this.fireStore.collection('shows').doc(tvs.id).delete();
    // this.showList = this.showList.filter(sle => tvs !== sle);
  }

  async showDetails(tvs: TVShow) {
    this.currentActiveShow = tvs;
  }

}
