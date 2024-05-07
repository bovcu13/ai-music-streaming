import { Component } from '@angular/core';
import { MenuComponent } from "../component/menu/menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
