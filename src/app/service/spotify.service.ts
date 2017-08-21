import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor(private http:Http) { }

  

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append('Authorization','Bearer BQCWdIo0iNcWuLG2wcBgbgmo_AGMea713IVurEvJXc0t0gp_7c-Ls_-E0uwqzPGtDlTFx9vEg7-MpiEQe-x8LA');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
      .map( res => {
      console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
      return this.artistas;
    });
  }

  getArtista(id:string){
    let headers = new Headers();
    headers.append('Authorization','Bearer BQCWdIo0iNcWuLG2wcBgbgmo_AGMea713IVurEvJXc0t0gp_7c-Ls_-E0uwqzPGtDlTFx9vEg7-MpiEQe-x8LA');

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
      .map( res => {
      console.log(res.json());
      return res.json();
    });
  }

}
