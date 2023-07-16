/*

| NGRX


/ Imagine you have a big box of toys, and you want to keep track of which toys are in the box and where they are.
/ You could write down the names of all the toys on a piece of paper, but that would be a lot of work. Instead, you could use a spreadsheet.
/ A spreadsheet is a tool that helps you to keep track of data in a way that is easy to understand and update.

/ NgRx is like a spreadsheet for your Angular application.
/ It helps you to keep track of the state of your application in a way that is easy to understand and update.
/ The state of your application is everything that is happening in your application right now.
/ For example, the state of your application might include:
- The current user.
- The list of products that are in the shopping cart
- The current page that the user is viewing.

/ NgRx has a number of features that make it a powerful tool for managing the state of your Angular application. These features include:

: Reducers:
> Reducers are functions that take the current state of your application and the action that was just performed, and they return the new state of your application.

: Actions:
> Actions are objects that represent events that happen in your application. For example, an action might represent the user clicking a button or the user submitting a form.
> Usually has a Type & Payload

: Store:
> The store is the central repository for the state of your application. It is where all of the reducers and actions are stored.

: Effects:
> Effects are functions that are used to communicate with the outside world. For example, an effect might be used to fetch data from a server or to save data to a database.


!!-------------------------------------------------------------------------------------------------------------------------------------------------


| NGRX Reducers

/ Imagine you have a toy box, and you want to keep track of the toys in it.
/ You could write down the names of all the toys on a piece of paper, but that would be a lot of work.
/ Instead, you could use a reducer.
/ A reducer is a function that takes the current state of your toy box and the action that was just performed, and it returns the new state of your toy box.

/ For example, if you add a toy to your toy box, the action would be something like "add toy".
> The reducer would then take the current state of your toy box, which would include a list of all the toys in the box, and it would add the new toy to the list.
> The reducer would then return the new state of your toy box, which would now include the new toy.

: NgRx reducers are used to manage the state of your Angular application.
: They are a very powerful tool, and they can help you to keep your application's state consistent.

/ Here is an analogy that might help you understand reducers better.
/ Imagine you are playing a game of Monopoly.
/ The state of the game is everything that is happening in the game right now.
/ For example, the state of the game would include the current player's turn, the amount of money each player has, and the properties that each player owns.

@ The reducers in Monopoly are the rules of the game.
@ They tell you how to update the state of the game when something happens.
@ For example, if a player rolls doubles, the reducers would tell you how to update the state of the game to move the player's piece two spaces.

> Reducers are a very important part of any Angular application.
> They help you to keep your application's state consistent, and they make it easier to reason about the state of your application.


!!-------------------------------------------------------------------------------------------------------------------------------------------------

*/
