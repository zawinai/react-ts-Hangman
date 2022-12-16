import { useContext } from "react"
import { AppContext } from "../context"


const Header = () => {

     const{win, lost, tries, guess} = useContext(AppContext)

  return (
     <header className='text-center text-4xl text-white font-bold'>
     <h1>
      {
       win ? 
       "Congrats! You Guessed Correctly"
       :
       lost 
       ? 
       `You Lost The Answer Is '${guess}'`
       :
       `${tries}`+`${tries > 1 ? " times out of ": " time out of "} 6`
      }
     </h1>
   </header>
  )
}

export default Header