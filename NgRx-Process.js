/*
| Define Actions:
> Actions are plain objects that represent events or user interactions that occur in your application.
> Define your actions by creating classes or interfaces that describe the action type and payload.

| Create Reducers:
> Reducers are pure functions that take the current state and an action as input and produce a new state as output.
> Create your reducers by defining functions that handle each action and return a new state object.
!! ImgRef: 15

| Define the Store:
> The store is where the application state is stored.
> Create a store by importing the StoreModule.forRoot() function from @ngrx/store and adding it to the imports array of your application's main module.

| Dispatch Actions:
> To update the state, you dispatch actions from your components or services.
> Dispatch an action by injecting the Store service and using its dispatch method, passing the action instance as an argument.
!! ImgRef: 16

| Handle Actions with Effects:
> Effects are used to handle side effects, such as making HTTP requests or interacting with external services.
> Create effects by defining classes that listen for specific actions and perform async operations.
: Use the @Effect() decorator and the Actions service from @ngrx/effects.
!! ImgRef: 17


| Update State with Selectors:
> Selectors are functions that extract specific data from the state.
> They allow you to retrieve and transform data from the store in a reusable and efficient manner.
> Create selectors by defining functions that accept the state as input and return specific parts of the state.

| Subscribe to State Changes:
> Components that need to access the state should subscribe to state changes.
> Use the select method from the Store service to subscribe to specific state slices or use the async pipe in your templates.
!! ImgRef: 18



| Updating State:
> When actions are dispatched, they flow through the reducers, effects, and update the state in the store.
> The updated state triggers subscriptions, and components receive the new data, triggering re-rendering if necessary.
: Dispatching actions triggers the reducers and effects, which update the state in the store.
: Subscribed components receive the updated state and can react accordingly.

*/

