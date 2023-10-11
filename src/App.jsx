
import { useState } from 'react'
import './App.css'
import PhraseRandom from './components/PhraseRandom'
import { getData } from './dataBase'
import { getRandomNumber } from './utils/random'


function App() {
 const [phrase, setPhrase] = useState(getData()?.phrase)

  return (
    <>
    <div className={`content${getRandomNumber(4)}`}>
      <section className='content-title'>
        <p>Fortune Cookies</p>
      </section>
     
      <section className='content-phrase'>
      <p>{phrase}</p>
      </section>

      <section>
      <PhraseRandom setPhrase={setPhrase}/>
      </section>
    
    </div>
      
    </>
  )
}

export default App
