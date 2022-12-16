import { useContext } from 'react'
import { AppContext } from '../context'


const WordBar = () => {

     const {guess, guessedLetters} = useContext(AppContext)

  return (
    <div className='text-center text-white font-bold text-2xl'>
     {guess.split("").map((w, index) => (
          <span className='mx-2 border-b-4 px-4 py-2' key={index}>
               <span style={index === 0 || index === guess.split("").length - 1 || guessedLetters.includes(w) ? {} : { visibility : 'hidden' }}  >
                    {w}
               </span>
          </span>
     ))}
    </div>
  )
}

export default WordBar