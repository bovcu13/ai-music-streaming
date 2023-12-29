import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pheader',
  standalone: true,
    imports: [
        ButtonModule,
        RouterLink
    ],
  templateUrl: './pheader.component.html',
  styleUrl: './pheader.component.scss'
})
export class PheaderComponent {

}
