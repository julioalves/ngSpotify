import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../models/artist";
import {Album} from "../../models/album";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    id: string;
    artist: Artist;
    albums: Album[];

    constructor(private api: SpotifyService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id)=> {
                this.api.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                        }
                    );
                this.api.getAlbums(id)
                    .subscribe(albums => {
                            this.albums = albums.items;
                            console.log(this.albums);
                        }
                    )
            });
    }

}
