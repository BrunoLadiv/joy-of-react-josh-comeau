import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import GuessResults from '../GuessResults'
import Guess from '../Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import NotificationBanner from '../NotificationBanner'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState(null)
  

  return (
    <>
      <GuessResults>
        {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
          return <Guess key={i} guessObj={guesses[i]} answer={answer}  guessLeng={guesses.length} setGameStatus={setGameStatus} />
        })}
      </GuessResults>
      <NotificationBanner status={gameStatus} guessLeng={guesses.length} answer={answer}/>
      <Form
        gameStatus={gameStatus}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  )
}

export default Game
