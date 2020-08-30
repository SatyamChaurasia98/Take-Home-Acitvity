import React,{createContext,useReducer} from 'react';
import './App.css';
import PriceList from './container/priceList'
import {initialState,reducer} from './reducer/reducer'

// constext api for maintaing states.
export const UserContext = createContext()
const App = ()=>{
  const[state,dispatch] = useReducer(reducer,initialState)
  return(
    <div>
    <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <PriceList/>
    </UserContext.Provider>
    </div>
  )
}

export default App;
