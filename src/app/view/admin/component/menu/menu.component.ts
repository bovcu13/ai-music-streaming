import { Component, ViewChild } from '@angular/core';
import { PRIMENG_MODULES } from "../../../../share/primeng";
import { Sidebar } from "primeng/sidebar";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";

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

  sidebarVisible: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
