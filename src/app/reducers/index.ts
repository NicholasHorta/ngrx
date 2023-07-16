import { isDevMode } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export const appFeatureKey = 'app';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any>{
  return (state, action) => {
    console.log(`%c meta: State before `, `background: yellow; color: black;`, state)
    console.log(`%c meta: Action `, `background: orange; color: black;`, action)
    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : []



