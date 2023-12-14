import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

import { PRIMENG_MODULES } from "../../share/primeng";
import { MenuComponent } from "../component/menu/menu.component";
import { HeaderComponent } from "../component/header/header.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    RouterOutlet,
    PRIMENG_MODULES,
    MenuComponent,
    HeaderComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
