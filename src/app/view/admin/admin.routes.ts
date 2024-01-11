import { Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { MemberComponent } from "./admin/member/member.component";
import { VodMgmtComponent } from "./admin/vod-mgmt/vod-mgmt.component";
import { StatisticsComponent } from "./admin/statistics/statistics.component";
import { AccountingComponent } from "./admin/accounting/accounting.component";

export const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: 'member', pathMatch: 'full' },
      { path: 'member', component: MemberComponent },
      { path: 'vod-mgmt', component: VodMgmtComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'accounting', component: AccountingComponent },
    ]
  },
];
