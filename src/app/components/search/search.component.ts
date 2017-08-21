import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino:string;
  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
    
  }


  buscarArtista(){
    this._spotifyService.getArtistas(this.termino).subscribe( data => {
      console.log(data);
    });
  }
}
