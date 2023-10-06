import React from 'react'

import { getData } from '../dataBase'


const PhraseRandom = ({setPhrase}) => {

    const getRandomPhrase=()=>{

        setPhrase(getData())

    }
    

    
  return (
    <div>
    <button onClick={getRandomPhrase}>See Other</button>
    </div>
  )
}

export default PhraseRandom