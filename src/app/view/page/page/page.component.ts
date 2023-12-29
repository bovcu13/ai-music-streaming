import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { PheaderComponent } from "./pheader/pheader.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    RouterOutlet,
    PheaderComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
