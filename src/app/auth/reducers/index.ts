import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  //| This is the definition of the state inside the store
  user: User
}

export const initAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initAuthState,
  on(AuthActions.login, (state, action) => {
    console.log(`%c state `, `background: #7AE216; color: black;`, state)
    console.log(`%c action `, `background: #DB155F; color: white;`, action)
    return {user: action.user}
  }),
  on(AuthActions.logout, (state, action) => {
    console.log(`%c state `, `background: #7AE216; color: black;`, state)
    console.log(`%c action `, `background: #DB155F; color: white;`, action)
    return {user: undefined}
  }),

)

