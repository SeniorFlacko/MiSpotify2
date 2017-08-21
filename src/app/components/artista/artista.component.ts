import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista:any;
  constructor(private _activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params
    .map(parametros => parametros['id'])
    .subscribe( id => {
      console.log(id);
      this._spotifyService.getArtista(id).subscribe(data => {
        this.artista=data;
      });
    })
  }

}
