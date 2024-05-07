import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  login() {
    window.sessionStorage.setItem('user', 'user');
    this.router.navigate(['/']);
  }

  adminLogin() {
    window.sessionStorage.setItem('user', 'admin');
    this.router.navigate(['/admin']);
  }

  studentLogin() {
    window.sessionStorage.setItem('user', 'student');
    this.router.navigate(['/']);
  }
}
