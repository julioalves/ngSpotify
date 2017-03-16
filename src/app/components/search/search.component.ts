import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api:SpotifyService) { }

  ngOnInit() {
  }

  term:string;
  searchMusic(){
    this.api.searchMusic(this.term).subscribe( res => {
        console.log(res.artists.items);
    });
  }

}