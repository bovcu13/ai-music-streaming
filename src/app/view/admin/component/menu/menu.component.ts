import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../../share/primeng";
import { items } from "../../../../share/data/admin-menu";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    PRIMENG_MODULES
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items = items;
}
