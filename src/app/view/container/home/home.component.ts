import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { course } from "../../../share/data/course";
import { RouterOutlet } from "@angular/router";
import { NgClass, NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    RouterOutlet,
    NgForOf,
    FormsModule,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginDialog = true;
  course = course;

  playPauseAudio(audioElement: HTMLAudioElement) {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  getStarClass(rating: number, starNumber: number) {
    if (rating >= starNumber) {
      return 'text-yellow-500 text-sm fa-solid fa-star';
    } else if (rating >= starNumber - 0.5) {
      return 'text-yellow-500 text-sm fa-solid fa-star-half-stroke';
    } else {
      return 'text-yellow-500 text-sm fa-regular fa-star';
    }
  }
}
