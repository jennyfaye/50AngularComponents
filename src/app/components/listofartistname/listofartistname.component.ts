import { Component } from '@angular/core';

@Component({
  selector: 'app-listofartistname',
  templateUrl: './listofartistname.component.html',
  styleUrl: './listofartistname.component.css'
})
export class ListofartistnameComponent {
  artist: string = '';
  artistName: string[] = [];

  addName() {
    if (this.artist.trim()) {
      this.artistName.push(this.artist.trim());
      this.artist = '';
      console.log("Artist name added.")
    }
  }
  removeArtist(index: number) {
    this.artistName.splice(index, 1);
    console.log("Artist name removed.")
  }
}
