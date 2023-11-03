import React from 'react'
import Toast from '../Toast/Toast'
import Button from '../Button'
import ToastShelf from '../ToastShelf/ToastShelf'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [textarea, setTextArea] = React.useState('')
  const [variant, setVariant] = React.useState('notice')
  const [messages, setMessages] = React.useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const id = crypto.randomUUID()
    const newToast = {
      message: textarea,
      variant,
      id,
    }
    const updatedMessages = [...messages, newToast]
    setMessages(updatedMessages)
    setTextArea('')
    setVariant('notice')
    
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

      <ToastShelf
        messages={messages}
        setMessages={setMessages}
      />

      <form onSubmit={handleSubmit}>
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
                onChange={(e) => setTextArea(e.target.value)}
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
