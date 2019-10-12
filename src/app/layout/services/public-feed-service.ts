import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class PublicFeedService {
  constructor(private http: HttpClient) {
  }

  private baseurl = environment.nodeServiceURL;
  getFlickrPictures(searchInput) {
    searchInput = searchInput ? searchInput : 'nyc';
    return new Promise((resolve, reject) => {
      this.http.get(this.baseurl + 'public-feed/getFlickrPictures?searchInput=' + searchInput)
        .subscribe(
          (data) => {
            resolve(data);
          }, error => {
            reject(error);
          }
        );
    });
  }
}
