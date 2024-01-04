import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    FormsModule,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  value!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }


  goToWatch(id: any) {
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    if (currentRoute === 'watch/:id') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/watch', id]);
    }
  }

  openRegisterInNewTab() {
    window.open('/register', '_blank');
  }
}
