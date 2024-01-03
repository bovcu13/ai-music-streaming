import { Component, ElementRef, Renderer2 } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { course } from "../../../share/data/course";
import { RouterOutlet } from "@angular/router";
import { NgClass, NgForOf, NgStyle } from "@angular/common";
import { FormsModule } from "@angular/forms";

declare var ColorThief: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    RouterOutlet,
    NgForOf,
    FormsModule,
    NgClass,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginDialog = false;
  domainImg: any;
  domainColor: any;
  course = course;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  playPauseAudio(audioElement: HTMLAudioElement) {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  openLoginDialog(course: any) {
    this.domainImg = course.imageUrl;
    this.getDominantColor(course.imageUrl);
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

  getDominantColor(imageUrl: string) {
    const colorThief = new ColorThief();
    const img = new Image();

    let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(imageUrl);

    img.onload = () => {
      const color = colorThief.getColor(img);
      this.domainColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      console.log(this.domainColor);
      this.loginDialog = true;
    };
  }

  openRegisterInNewTab() {
    window.open('/register', '_blank');
  }
}
