import React from 'react'
import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

function Guess({ guessObj, answer, guessLeng, setGameStatus }) {
  
  let cssClassArray
  if (guessObj) {
    cssClassArray = checkGuess(guessObj.guess, answer)
  }
  const gameWon =
    cssClassArray && cssClassArray.every((item) => item.status === 'correct')
  const gameLost = guessLeng >= 6
  if (gameWon) {
    setGameStatus(true)
    
  } else if (gameLost) {
    setGameStatus(false)
  }
  


  return (
    <p
      key={guessObj && guessObj.id}
      className="guess"
    >
      {range(5).map((i) => {
        return (
          <span className={`cell ${cssClassArray && cssClassArray[i].status}`}>
            {guessObj && guessObj.guess[i]}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
