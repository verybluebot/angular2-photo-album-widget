import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination';


import { AppComponent } from './app.component';
import { PhotoalbumComponent } from './photo-album/photo-album.component';
import { PhotoComponent } from './photo-album/photo/photo.component';
import { SearchBoxComponent } from './photo-album/search-box/search-box.component';
import { SearchPipe } from './photo-album/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotoalbumComponent,
    PhotoComponent,
    SearchBoxComponent,
    SearchPipe
  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
