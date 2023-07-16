import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";

import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule } from "@ngrx/data";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import * as fromApp from "./reducers";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatToolbarModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(fromApp.reducers, {
      metaReducers: fromApp.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      },
    }), // !! ImgRef: 14
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router",
      routerState: RouterState.Minimal,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
  | How meta-reducers work:


  . Definition:
  > Meta-reducers are functions that wrap or modify the behavior of a reducer.
  >They take the reducer function as input and return a new reducer function with modified behavior.
  : Meta-reducers have a specific signature (reducer: ActionReducer<any>) => ActionReducer<any>.


  . Manipulating Behavior:
  > Meta-reducers can modify the state or behavior of a reducer in various ways.
  * For example, they can transform the state before it reaches the actual reducer, perform additional actions based on the dispatched action, log state changes, or even prevent certain actions from being processed.


  . Execution Order:
  > Meta-reducers are applied in the order they are specified when creating the store.
  > The first meta-reducer in the chain receives the original reducer function, and each subsequent meta-reducer receives the modified reducer function from the previous one.


  . Usage:
  > To use a meta-reducer in NgRx, you include it in the metaReducers array when configuring the store in your application's main module.
  : The metaReducers array is passed as a configuration option to the StoreModule.forRoot() function.
*/
