import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// imports
import { AppRoutingModule } from './app-routing.module';
import { PortalModule } from './portal/portal.module';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

// components
import { AppComponent } from './app.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PortalModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,

    // PortalComponent,
    // HomeComponent,
    // RelatorioComponent,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
