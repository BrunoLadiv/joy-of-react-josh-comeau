import React from 'react'
import Toast from '../Toast/Toast'
import Button from '../Button'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [textarea, setTextArea] = React.useState('')
  const [variant, setVariant] = React.useState('notice')
  const [showToast, setShowToast] = React.useState(false)
  console.log(variant)

  function handleTextArea(e) {
    setTextArea(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <Toast
          message={textarea}
          variant={variant}
          setShowToast={setShowToast}
        />
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={textarea}
              onChange={handleTextArea}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label
                  key={`variant-${option}`}
                  htmlFor={`variant-${option}`}
                >
                  <input
                    onChange={(e) => setVariant(e.target.value)}
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setShowToast(!showToast)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
