import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

class AuthGuardService {

  constructor(private store: Store<AppState>, private router: Router){}

  canActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean{
    return this.store.pipe(select(isLoggedIn), tap(loggedIn => {
      if(!loggedIn){
        this.router.navigateByUrl('/')
      }
    }))
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuardService).canActivateFn(next, state)
}
