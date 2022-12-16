import { createContext, useReducer, ReactNode } from "react";
import words from "../src/wordList.json"
import { ContextTypes, initialStateTypes } from "./interfaces";


const initialState : initialStateTypes = {
     guess : words[Math.floor(Math.random() * words.length)],
     guessedLetters : [],
     tries : 0,
     tryTimes : 6,
     addGuessedLetters : () => [],
     addIncorrectGuess : () => [],
     incorrectGuess : [],
     win : false,
     lost : false,
     setWin : () => {},
     setLost : () => {}
}

export const AppContext = createContext<initialStateTypes>(initialState)

type children = {
     children : ReactNode
}

export const AppProvider  = ({children} : children) => {

     type actionTypes = { type : "guess" }  
     | { type : "guessedLetters", payload : string } 
     | { type : "setTries" } 
     | { type : "setWin" } 
     | { type : "incorrectGuess", payload : string[]}
     | { type : "setWin" }
     | { type : "setLost" }

     const reducer = (state : initialStateTypes , action : actionTypes)  => {

          switch(action.type){
               case "guess": 
                    return {...state, guess : words[Math.floor(Math.random() * words.length)]}
               case "guessedLetters":
                    return {...state, guessedLetters : [...state.guessedLetters, action.payload]}
               case "setTries":
                    return { ...state, tries : state.tries + 1}
               case "incorrectGuess":
                    return {...state, incorrectGuess : [...action.payload]}
               case "setWin":
                    return {...state, win : true}
               case "setLost":
                    return {...state, lost : true}
               default:
                    return state
          }
     }

         
     const [ state, dispatch ] = useReducer(reducer , initialState)

     const addGuessedLetters  = (word : string) : void => {

          dispatch({type : "guessedLetters", payload : word})
      
          if(!state.guess.includes(word)){
              dispatch({type : "setTries"})
          }

     }

     const addIncorrectGuess = (word : string[]) => {
          dispatch({type : "incorrectGuess", payload : word})
     }

     const setWin = () =>  {
          dispatch({type : "setWin"})
     }

     const setLost = () => {
          return dispatch({type : "setLost"})
     }
     
     const values = {
          guess : state.guess,
          guessedLetters : state.guessedLetters,
          tries : state.tries,
          tryTimes : state.tryTimes,
          addGuessedLetters : addGuessedLetters,
          incorrectGuess : state.incorrectGuess,
          addIncorrectGuess : addIncorrectGuess,
          win : state.win,
          lost : state.lost,
          setWin : setWin,
          setLost : setLost,
          dispatch : dispatch,
     }

return (
     <AppContext.Provider value={values}>
          {children}
     </AppContext.Provider>
)}




