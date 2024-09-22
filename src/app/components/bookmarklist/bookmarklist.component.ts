import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  url: string = '';
  urls: string[] = [];

  addUrl() {
    if (this.url.trim()) {
      this.urls.push(this.url.trim());
      this.url = '';
      console.log("Link Added!")
    }
  }
}
