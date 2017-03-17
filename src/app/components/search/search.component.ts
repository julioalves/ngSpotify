import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../models/artist";
import {Router} from '@angular/router';

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
  searchResult:Artist[];

  searchMusic(){
    this.api.searchMusic(this.term).subscribe( res => {
        this.searchResult = res.artists.items;
    });
  }

}