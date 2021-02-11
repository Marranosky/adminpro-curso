import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ExportExcelComponent } from './export-excel/export-excel.component';
import { CasePackComponent } from './case-pack/case-pack.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'promesas', component: PromesasComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'exportar-excel', component: ExportExcelComponent },
      { path: 'case-pack', component: CasePackComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
