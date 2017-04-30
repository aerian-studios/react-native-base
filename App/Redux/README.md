# Using this redux setup
The docs at [reduxjs.org - http://redux.js.org/](http://redux.js.org/) are very complete. These notes are more about the usage in this project.

## :bike: Where to start?
Apart from a good grasp of redux, the first file is `./index.js` (as with most other folders in this project). This combines the various reducers and does all the wiring between sagas and redux via `./CreateStore.js`.

So make or adapt a new reducer and add it to the `combineReducers` method call in `./index.js` and make sure that your sagas are equivalently declared in the `/App/Sagas/` folder.