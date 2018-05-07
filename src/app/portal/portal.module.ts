import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports
import { PortalRoutingModule } from './portal-routing.module';

// components
import { PortalComponent } from './';
import { HomeComponent } from './home';
import { RelatorioComponent } from './relatorio';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule
  ],
  declarations: [
    PortalComponent,
    HomeComponent,
    RelatorioComponent,
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class PortalModule { }
