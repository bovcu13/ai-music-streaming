import { Routes } from '@angular/router';
import { PageComponent } from "./page/page.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
];
