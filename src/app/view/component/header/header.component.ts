import { Component, OnInit } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getDisplayUserName() {
    switch (this.authService.getUserName()) {
      case 'admin':
        return '管';
      case 'student':
        return '學';
      default:
        return '預';
    }
  }

  openRegisterInNewTab() {
    window.open('/register', '_blank');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
