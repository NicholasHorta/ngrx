/*
  % Section 1: Intro

  | Angular Reactive Extensions

  - State management based on Redux
  - Be able to update the stored data, and have it immediately reflect
  - DB ops will be done in the background without interrupting user experience
  - Allows us to build a client side DB with our data  and minimize the number of http requests to the server
  - Allows us to have different parts of our view reflect new versions of the data without having to call the server

  | Install
  > ng add @ngrx/store (RefImg: 1)
  - We added an in-memory db to our app where we can store and read data
  > ng add @ngrx/store-devtools (RefImg: 2)
  > Add extension - Redux (RefImg: 3)


!!-------------------------------------------------------------------------------------------------------------------------------------------------


  % Section 2: NgRx Key Concepts - Actions & Reducers
  > ng g store auth/Auth --module auth.module.ts (RefImg: 4, 5)
  £ Note: We removed the meta-reducer stuff
  - We now have an reducers/index file which corresponds to the configured StoreModule (RefImg: 6)
  - We have now completed the setup and can now start using it

  - We want to create a side effect to store the profile in the store
  : The only way to modify the data within the store is to use the DISPATCH method - BUILD and DISPATCH an Action
  : An Action is a plain JS object that we send to the store in order to trigger modification of the store state
  : Each Action has a:
  / Type - String
  / Payload - Data the store might need to create a new version of its internal state

  // | We define the Action Type by following a specific convention
  //>  "[Component] Action/Event", props<Content>
  / @ beginning of action type, between the [] - we define the source of the action
  / Defines the place in the application where the action is being dispatched
  / Helps us not dispatch the same action in multiple different components of our app

  //| Second part - Event or command that the action corresponds to
  / Define the content of the payload in a type-safe way
  . Props - Doesn't take an argument, BUT takes the generic param which is the TYPE of the payload associated to this action

  : So the action should ONLY be dispatched by the Login Page and by no other part of the app
  : We then know Login Page is the SOURCE of the action - This will be useful in our Action Logs
  !! RefImg: 7

  | We can group our actions into modules to make accessing them in relatable ways easier
  !! RefImg: 8

  | Reducers
  - Takes the current state, takes an action -> returns a new version of the state
  : What should the store do in response to the action
  £ We removed the ActionReducerMap in our index.ts file and written our own
  / Reducer function - New state creator
  : function authReducer( CurrentStateWithinTheStore, actionWeDispatched ): returnsNewCalculatedState {}
  / Tells the store what to do in response to a particular action

  . export const reducer = createReducer(
  .   A: initAuthState,
  .   B: on(AuthActions.login, (state, action) => {
  .     return {user: action.user}
  .   })
  . )

  - A: initial value of the authentication state, should have the value represented
  - B: Provide smaller functions on how to react to a particular action
  : responseToAction(WhatAction, response) => output is the new version of the auth state / What will be the new value of the state )
  $ responseToAction(LoginAction, (loginState, loginAction) => { return { user: loginAction.user } })
  !! RefImg: 9

!!-------------------------------------------------------------------------------------------------------------------------------------------------


  % Section 3: NgRx Key Concepts - Selectors & Effects

  | Selectors
  / Take min 2 args

  .export const isLoggedIn = createSelector(
  .  state => state["auth"],
  .  state => state['courses'],
  .  (value) => value
  .)

  / Very similar to rxjs mapping function, however, this one has memory
  / so as long as our inputs to the object don't change, the output is not going to be re-calculated
  / this is known as Memoization - Keeps memory of previous executions and only executes itself if the inputs of the function have not been calculated before
  / After each run, it will keep in the cache, the results of each calculation

  : We can combine multiple selectors, the isLoggedIn function IS a mapping function, so it returns a value as a result of the selector, of which we can return
  !! RefImg: 10

  !! Reflect on the process - RefImg: 11 & 12

  | Effect
  / Side effect to change/update/synchronizing the BE with the new data
  / We use ngrx/effects for this
  : Add to App Module & Feature module(s) - We add it to each feature module which have their own side effects
  . .forRoot([]) for App Module && .forFeature([]) for feature module(s)
  / The feature module array will contain the list of side effects linked to this specific module
  !! RefImg: 13

  ! When you create an effects class, it should not be imported into any other area of the code besides the feature module you're working in
  ! Side Effect:
  % Something extra/done in response to a given action
  % Action gets dispatched
  % Its reducer gets triggered
  % And then we apply a side effect

  - In order to implement a given side effect
  - Need to be notified that a given action was triggered
  - We get notified by the Actions service
  : Subscribe to the Actions Observable
  : Wait for a login action to be emitted
  : And as a side-effect of the action, store the user pf on the db

  $ Side effect:
  - Something extra we want to do in our application
  - After an action has been dispatched and processed by the store
  - Which is after the reducers linked to the actions have been triggered


!!-------------------------------------------------------------------------------------------------------------------------------------------------


  % META REDUCERS
  - Same as reducers but they are processed BEFORE the normal reducers are invoked
  - So when an action gets dispatched in an application, such as the login action
  - NgRx store will trigger any meta-reducers that may be configured before handling the login action
  - This meta-reducers have a specific order, and will be executed in that specific order every time
  - When  all meta-reducers are finished, only then will normal actions will be handled
  > Meta-reducers in NgRx are a powerful feature that allows you to intercept and modify the behavior of reducers.
  > They provide a way to modify the state update process globally across all reducers in your application.
  : Meta-reducers sit between the dispatching of an action and the actual execution of a reducer.



*/
