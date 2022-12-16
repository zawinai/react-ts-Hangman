import { ReactElement } from 'react'

// Components
import Keyboard from "./components/keyboard"
import BodyPart from './components/bodyParts'
import WordBar from './components/wordBar'
import Header from './components/header'

// Context provider
import { AppProvider } from './context'


function App() : ReactElement{

  return (

    <AppProvider>
        <main className='bg-slate-800 selection:bg-transparent min-h-screen'>

          <Header/>

          <section className='flex items-center justify-start py-5 px-20 ml-[10%] sm:ml-[27%] md:ml-[32%] lg:ml-[38%]'>
            <BodyPart/>
          </section>

          <section className=''>

            <WordBar />          

            <div className='max-w-[800px] h-[800px] mx-auto md:h-auto'>
              <Keyboard />
            </div>

          </section>

          <footer className="text-center text-slate-50">
            React-TypeScript Hangman Game
          </footer>
          
        </main>

    </AppProvider>

  )
}

export default App
