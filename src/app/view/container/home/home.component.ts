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
  audioElement1 = new Audio('https://www.chosic.com/wp-content/uploads/2022/01/Evening-Improvisation-with-Ethera(chosic.com).mp3');

  playPauseAudio1() {
    if (this.audioElement1.paused) {
      this.audioElement1.play();
    } else {
      this.audioElement1.pause();
    }
  }

  audioElement2 = new Audio('https://www.chosic.com/wp-content/uploads/2023/06/Moonset(chosic.com).mp3');

  playPauseAudio2() {
    if (this.audioElement2.paused) {
      this.audioElement2.play();
    } else {
      this.audioElement2.pause();
    }
  }
}
