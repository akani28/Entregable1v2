
import { useState } from 'react'
import './App.css'
import PhraseRandom from './components/PhraseRandom'


function App() {
 const [phrase, setPhrase] = useState("sin frase")

  return (
    <>
    <div>
      <section>
        <p>Fortune Cookies</p>
      </section>
     
      <section>
      <p>{phrase}</p>
      <PhraseRandom setPhrase={setPhrase}/>
      </section>
    
    </div>
      
    </>
  )
}

export default App
