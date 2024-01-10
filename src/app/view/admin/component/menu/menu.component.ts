import { Component, ViewChild } from '@angular/core';
import { PRIMENG_MODULES } from "../../../../share/primeng";
import { items } from "../../../../share/data/admin-menu";
import { Sidebar } from "primeng/sidebar";

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
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
