import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { RouterOutlet } from "@angular/router";
import { MenuComponent } from "../../component/menu/menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    PRIMENG_MODULES,
    MenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  audioElement = new Audio('https://www.chosic.com/wp-content/uploads/2022/01/Evening-Improvisation-with-Ethera(chosic.com).mp3');

  playPauseAudio() {
    if (this.audioElement.paused) {
      this.audioElement.play();
    } else {
      this.audioElement.pause();
    }
  }
}
