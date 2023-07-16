import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

//$ This is what is known as an Action Creator
//: export const action = createAction(
//:   "[Component] Action Description",
//:   ActionFn<Data>()
//: );

export const login = createAction(
  "[Login Page] User Login",
  props<{ user: User }>()
);

export const logout = createAction(
  "[Top Menu] Logout"
);
