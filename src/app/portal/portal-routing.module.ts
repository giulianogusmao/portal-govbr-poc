import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from './portal.component';
import { HomeComponent } from './home';
import { RelatorioComponent } from './relatorio';

const portalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'relatorio', component: RelatorioComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(portalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortalRoutingModule { }
