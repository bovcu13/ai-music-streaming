import { Component } from '@angular/core';
import {PRIMENG_MODULES} from "../../../share/primeng";

@Component({
  selector: 'app-music-play-list',
  standalone: true,
    imports: [
        PRIMENG_MODULES
    ],
  templateUrl: './music-play-list.component.html',
  styleUrl: './music-play-list.component.scss'
})
export class MusicPlayListComponent {

}
