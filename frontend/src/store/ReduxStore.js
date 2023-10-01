// Redux is state management system which help to store temporary data so that we can access all components where we required... we use this to create a reducers function to save data in store..

import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import { reducers } from "../reducers";
  
  function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
  }
  
  function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistedState = loadFromLocalStorage();
  
  const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));
  
  store.subscribe(() => saveToLocalStorage(store.getState()));
  
  export default store;