import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext(); //context로 만들어서 StateContext에 담겠다는 의미.


export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)