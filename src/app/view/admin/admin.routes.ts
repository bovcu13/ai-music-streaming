import { Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { MemberComponent } from "./admin/member/member.component";

export const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: 'member', pathMatch: 'full' },
      { path: 'member', component: MemberComponent },
    ]
  },
];
