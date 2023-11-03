import React from 'react'

function Form({ guesses, setGuesses, gameStatus }) {
  const [inputValue, setInputValue] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const newGuess = {id: crypto.randomUUID(), guess: inputValue}
    setGuesses([...guesses, newGuess])
    setInputValue('')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== null && true}
        required
        pattern=".{5,}"
        maxLength="5"
        title="Please enter 5 characters"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  )
}

export default Form
