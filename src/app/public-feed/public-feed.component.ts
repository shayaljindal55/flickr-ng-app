import { Component, OnInit } from '@angular/core';
import { PublicFeedService } from '../layout/services/public-feed-service';
import { PhotoGallery } from './photo-gallery.model';

@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css'],
  providers: [PublicFeedService]
})
export class PublicFeedComponent implements OnInit {
  loadHtml = false;
  searchInput = '';
  photoArr: PhotoGallery[] = [];

  constructor(private publicFeedService: PublicFeedService) { }

  async ngOnInit() {
    // get images on page load
    await this.getFlickrPictures();
    this.loadHtml = true;
  }

  // call angular service to get images from flickr API. Angular service will call node js service
  getFlickrPictures() {
    // publicFeedService object of PublicFeedService => Angular Service Layer
    this.publicFeedService.getFlickrPictures(this.searchInput).then((data): any => {
      const result: any = data;
      // reset the photArr everytime before looping for a new search inpt value result
      this.photoArr = [];
      result.photos.photo.map((pic) => {
        // push images one by one in photoArr array, which will be used in HTML to render the images
        this.photoArr.push(
          { srcPath: 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg' });
      });
    });
  }
}
