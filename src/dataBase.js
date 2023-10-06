
const data=[
    {
      "phrase": "What you suspected is true, try to be kind to them, because this kindness will help everything to improve.",
      "author": "proverbia.net"
    },
    {
      "phrase": "A beautiful dream will come true and you will see how other dreams come true.",
      "author": "Japanese Proverb"
    },
    {
      "phrase": "The reality of the human being is his thought, not his material body.",
      "author": "proverbia.net"
    },
    {
      "phrase": "You will marry a professional athlete. If competitive eating can be considered a sport.",
      "author": "proverbia.net"
    },
    {
      "phrase": "Brave is the one he loves..",
      "author": "proverbia.net"
    },
    {
      "phrase": "You don't have to be faster than the bear, you just have to be faster than the slowest guy who runs from it.",
      "author": "proverbia.net"
    },
    {
      "phrase": "Don't take life too seriously. You won't get out of it alive.",
      "author": "proverbia.net"
    },
    {
      "phrase": "Tomorrow may be too late to enjoy what you have today.",
      "author": "ajescudero"
    },
    {
      "phrase": "When looking for what you want most, remember to do your best.",
      "author": "ajescudero"
    },
    {
      "phrase": "Don't forget that a friend is a gift you give yourself.",
      "author": "ajescudero"
    },
    {
      "phrase": "Rejoice, a path of beautiful passions awaits you and you must walk it.",
      "author": "ajescudero"
    },
    {
      "phrase": "A reputation of a thousand years may depend on the conduct of an hour",
      "author": "Japanese Proverb"
    },
    {
      "phrase": "Feel the happiness waiting for you and don't forget to catch it to keep it with you.",
      "author": "ajescudero"
    },
    {
      "phrase": "Rejoice, a path of beautiful passions awaits you and you must walk it",
      "author": "ajescudero"
    },
    {
      "phrase": "Not everyone can receive the same things. It was practiced.",
      "author": "ajescudero"
    }
  ]


  const getRandomNumber=(dataPhrase)=>{

    return Math.floor(Math.random()*dataPhrase.length)
}

  const getData=()=>{
    
    return data[getRandomNumber(data)]?.phrase


    }

export {getData}




 







