import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./model/user.model";
import { AuthState } from "./reducers";


//* Regular selectors
//£ export const isLoggedIn = createSelector(
//£   state => state["auth"],
//£   (auth) => !!auth.user
//£ )
//£ export const isLoggedOut = createSelector(
//£   isLoggedIn,
//£   loggedIn => !loggedIn
//£ )


//* Feature Selectors - Just a type safe version of the above Selectors
/// This will select a whole feature state branch from our global application state
/// Takes one arg - the name of the property we want to access in the global state
/// Also takes a type definition

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
)
export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)

