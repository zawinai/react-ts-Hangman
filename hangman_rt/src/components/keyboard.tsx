import { ReactElement, useContext, useEffect } from 'react'
import { AppContext } from '../context'
import keys from '../keys.json'

         
const Keyboard = () => {

  const {guess, guessedLetters, tryTimes, addGuessedLetters, addIncorrectGuess, setWin, setLost} = useContext(AppContext)
  
  useEffect(() => {

    const handler = (e : KeyboardEvent) => {
      
      let key = e.key

      if(keys.keys.includes(key.toUpperCase())){
        addGuessedLetters(key)
        e.preventDefault()
    }
  }
  
  document.addEventListener('keypress', handler)
  
  const incorrectGuess = guessedLetters.filter((w) => !guess.includes(w))
  
  addIncorrectGuess(incorrectGuess)

    if(guess.split("").every(e => [...guessedLetters, guess[0], guess[guess.length - 1]].includes(e))){
        setWin()
    }else if(incorrectGuess.length >= tryTimes){
      setLost()
    }

    return () => {
      document.removeEventListener('keypress', handler)

    }
  },[guessedLetters])

  return (
     <div className='grid grid-cols-keys-container gap-3 p-10 place-items-center '>
     {
       keys.keys.map((k) : ReactElement => {
         return(
           <button key={k} className="bg-slate-200 w-[60px] h-[50px] rounded-md hover:bg-slate-400 hover:text-black drop-shadow-xl" onClick={() => addGuessedLetters(k.toLowerCase())}>
               {k}
          </button>
         )
       })
     }
   </div>
  )
}

export default Keyboard