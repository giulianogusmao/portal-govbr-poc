import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { LoginComponent } from './login/index';

import { PortalComponent } from './portal';
import { HomeComponent } from './home/index';
import { RelatorioComponent } from './relatorio';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, outlet: 'painel' },
      { path: 'relatorio', component: RelatorioComponent, outlet: 'painel' },
    ],
    // loadChildren: 'app/portal/portal.module#PortalModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'portal'
  }
];
export const routing = RouterModule.forRoot(appRoutes);
