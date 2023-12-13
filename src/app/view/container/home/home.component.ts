import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    PRIMENG_MODULES
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
