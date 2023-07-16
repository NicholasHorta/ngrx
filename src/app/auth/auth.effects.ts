import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { logout } from "./auth.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  //> CreateEffect returns an observable with added benefits
  //> Auto subscription and error handling
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          //> Now, we have access to the type being passed by the Login Action
          localStorage.setItem("user", JSON.stringify(action.user));
        })
      ),
    //: Many side effects result in the dispatching of a new action
    //: We need to state that this should not
    //! Without, this could result in an infinite loop!
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem("user");
          this.router.navigateByUrl("/login");
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private router: Router) {}
}
// export class AuthEffects {
//   constructor(private actions$: Actions) {
//     actions$.subscribe(action => {
//       //@ We want to check the action type to ensure
//       //@ We are responding to the action specified
//       //! The below is not typesafe though!
//       //@ This is not what a typical side effect looks like
//       //@ This is just a high level overview

//       if(action.type === '[Login Page] User Login'){
//         //@ Access the DB and make changes
//         localStorage.setItem('user', JSON.stringify(action['user']))
//       }
//     })
//   }
// }
