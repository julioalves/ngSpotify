import {Injectable} from '@angular/core';
import 'rxjs';
import {Http} from "@angular/http";

@Injectable()
export class SpotifyService {

    private baseUrl:string = "https://api.spotify.com/v1/";
    private searchUrl:string;
    private artistUrl:string;

    constructor(private http: Http) {
    }

    searchMusic(str:string, type='artist'){
        this.searchUrl = this.baseUrl + 'search?query='+str+'&offset=0&limit=20&type='+type+'&market=BR';
        return this.http.get(this.searchUrl)
            .map(res => res.json());
    }

    getArtist(id:string){
        this.artistUrl = this.baseUrl + 'artists/'+id;
        return this.http.get(this.artistUrl)
            .map(res => res.json());
    }

    getAlbums(artistId:string){
        this.searchUrl = this.baseUrl + 'artists/'+artistId+'/albums';
        return this.http.get(this.searchUrl)
            .map(res => res.json());
    }

    getAlbum(id:string){
        this.searchUrl = this.baseUrl + 'albums/'+id;
        return this.http.get(this.searchUrl)
            .map(res => res.json());
    }

}
