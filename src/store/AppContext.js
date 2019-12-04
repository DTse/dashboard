import React, { createContext, useReducer } from "react";

let AppContext = createContext();

// Initiak app state
let initialState = {
    open: false,
    products: []
};
// useReducer returns a callback  that updates the state.
let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setOpen":
      return { ...state, open: action.value };
    case "setProducts":
      return { ...state, products: [...action.value] };
    default:
      return state;
  }
};

// Context provider.
const AppContextProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

// Context consumer.
let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };