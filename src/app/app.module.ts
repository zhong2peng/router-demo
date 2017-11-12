import { HeroesModule } from './heroes/heroes.module';
import { LoginRoutingModule } from './system/login-routing.module';
import { LoginComponent } from './system/login/login.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanDeactivateGuardService } from './system/service/can-deactivate-guard.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { appRoutes } from './app.routing';
import { SelectivePreloadingStrategy } from './system/service/selective-preloading-strategy';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    ),
    BrowserModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    CanDeactivateGuardService,
    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
