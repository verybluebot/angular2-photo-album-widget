import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoalbumService {

  constructor(private _http: Http) {}

  getPhotos(imagesUrl) {
    let headers = new Headers({
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*'
    });
    let options = new RequestOptions({headers: headers});
    console.log('getting photos from remote server');
    return this._http.get(imagesUrl)
      .map(res => res.json());
  }
}
