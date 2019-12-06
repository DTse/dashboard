import React, { createContext, useReducer } from "react";
import {seed} from '../utils/seed';

let AppContext = createContext();

// Initial app state
let initialState = {
    open: false,
    products: seed()
};

/**
   * useReducer returns a callback  that updates the state.
   * @param {string} state
   * @param {object} action
   * @return {any} 
**/ 
let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setOpen":
      return { ...state, open: action.value };
    case "setProducts":
      return { ...state, products: [...action.value] };
    case "upVote":
      const products = state.products.map(item => {
          if(item.id === action.value) item.votes++;
          return item;
      });
      return { ...state, products: [...products]};
    default:
      return state;
  }
};

/**
   * Context provider.
   * @param {object} props
   * @return {any} 
**/ 
const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

/**
   * Context consumer.
   * @return {any} 
**/ 
let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };