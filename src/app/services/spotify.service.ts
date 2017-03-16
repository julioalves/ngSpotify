import {Injectable} from '@angular/core';
import 'rxjs';
import {Http} from "@angular/http";

@Injectable()
export class SpotifyService {

    private baseUrl:string = "https://api.spotify.com/v1/";
    private searchUrl:string;

    constructor(private http: Http) {
    }

    searchMusic(str:string, type='artist'){
        this.searchUrl = this.baseUrl + 'search?query='+str+'&offset=0&limit=20&type='+type+'&market=BR';
        return this.http.get(this.searchUrl)
            .map(res => res.json());
    }

}
