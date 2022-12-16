export interface ContextTypes  {
     addGuessedLetters : (word : string) => void,  
     addIncorrectGuess : (word : string[]) => void,
     setWin : () => void,
     setLost : () => void
}


export interface initialStateTypes extends ContextTypes{
     guess : string,
     guessedLetters : string[],
     tries : number,
     tryTimes : number,
     incorrectGuess : string[],
     win : boolean,
     lost : boolean
}