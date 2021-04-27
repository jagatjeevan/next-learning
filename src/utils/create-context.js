import React, { useReducer } from 'react';

export const createContext = (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    const keysInActions = Object.keys(actions);
    keysInActions.forEach((key) => {
      boundActions[key] = actions[key](dispatch);
    });

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

export default createContext;
