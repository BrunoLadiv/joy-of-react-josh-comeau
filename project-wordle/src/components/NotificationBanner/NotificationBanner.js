/* eslint-disable no-restricted-globals */
import React from 'react'

function NotificationBanner({ status, guessLeng, answer }) {
  console.log(status)
  if (status === null) return
  return (
    <>
      {status && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {''}
            <strong>
              {guessLeng} {guessLeng === 1 ? 'guess' : 'guesses'}
            </strong>
            .
          </p>
          <button
            onClick={() => location.reload()}
            className="restart-btn"
          >
            RESTART
          </button>
        </div>
      )}
      {!status && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button
            onClick={() => location.reload()}
            className="restart-btn"
          >
            RESTART
          </button>
        </div>
      )}
    </>
  )
}

export default NotificationBanner
