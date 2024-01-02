import { Component } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { RouterLink } from "@angular/router";

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

}
