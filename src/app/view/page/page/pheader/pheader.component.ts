import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";
import { ImageModule } from "primeng/image";

@Component({
  selector: 'app-pheader',
  standalone: true,
    imports: [
        ButtonModule,
        RouterLink,
        ImageModule
    ],
  templateUrl: './pheader.component.html',
  styleUrl: './pheader.component.scss'
})
export class PheaderComponent {

}
