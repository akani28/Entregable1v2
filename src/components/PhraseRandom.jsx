import React from 'react'

import { getData } from '../dataBase'


const PhraseRandom = ({setPhrase}) => {

    const getRandomPhrase=()=>{

        setPhrase(getData()?.phrase)

    }
    

    
  return (
    <div className='content_button'>
      <section>
      <button className='btn' onClick={getRandomPhrase}>See Other</button>
      </section>
    
    <section>
      <section className='content-image'>
        <img className="image-logo" src="images/logocookies.png" alt="logo empanadas" />
      </section>
      <p>{getData()?.author}</p>
    </section>
    </div>
  )
}

export default PhraseRandom