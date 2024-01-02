import { Component, OnInit } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  showLoginTip: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

}
