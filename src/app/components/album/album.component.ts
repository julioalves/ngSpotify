import { Component, OnInit } from '@angular/core';
import {Album} from "../../models/album";
import {SpotifyService} from "../../services/spotify.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
    private songs: any;

    constructor(private api: SpotifyService, private route:ActivatedRoute) {
    }

    id:string;
    album: Album;

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id)=> {
                this.api.getAlbum(id)
                    .subscribe(album => {
                            this.album = album;
                        }
                    );
                // this.api.getSongs(id)
                //     .subscribe(songs => {
                //             this.songs = songs.items;
                //             console.log(this.songs);
                //         }
                //     )
            });
    }

}
