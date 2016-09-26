import { Component, OnInit, Input } from '@angular/core';
import { PhotoalbumService } from './photo-album.service';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss'],
  providers: [PhotoalbumService]
})
export class PhotoalbumComponent implements OnInit {
  @Input() term;
  @Input() feed;
  @Input() search;
  photosData = [];
  constructor(private _httpGetter: PhotoalbumService) {
  }

  ngOnInit() {
    this.getPhotos(this.feed)
  }

  getPhotos(feed) {
    this._httpGetter.getPhotos(feed)
      .subscribe(
        data => this.photosData = data,
        error => console.log(error),
        () => console.log("Finished getting photos")
      );
  }

}
