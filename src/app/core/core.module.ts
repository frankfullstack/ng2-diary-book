import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './modules/http-interceptors/auth-append-token';

import { AppComponent } from './containers/app';
import { NotFoundPageComponent } from './containers/not-found-page';
import { LayoutComponent } from './components/layout';
import { NavItemComponent } from './components/nav-item';
import { SidenavComponent } from './components/sidenav';
import { ToolbarComponent } from './components/toolbar';
import { EntryListItemComponent } from './components/entry-list-item';
import { EntryListComponent } from './components/entry-list';
import { NotLoggedInComponent } from './components/not-logged-in';
import { CommonShowIfLoggedInComponent } from './containers/common-show-if-logged-in';
import { LoaderComponent } from './containers/loader';

import { PipesModule } from '../shared/pipes';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  EntryListItemComponent,
  EntryListComponent,
  NotLoggedInComponent,
  CommonShowIfLoggedInComponent,
  LoaderComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, PipesModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}
