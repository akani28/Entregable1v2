import React from 'react'

import { getData } from '../dataBase'


const PhraseRandom = ({setPhrase}) => {

    const getRandomPhrase=()=>{

        setPhrase(getData()?.phrase)

    }
    

    
  return (
    <div className='content_button'>
    <button className='btn' onClick={getRandomPhrase}>See Other</button>
    <section>
      <p>{getData()?.author}</p>
    </section>
    </div>
  )
}

export default PhraseRandom