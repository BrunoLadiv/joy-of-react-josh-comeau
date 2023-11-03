import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ messages, setMessages }) {
  return (
    <ol className={styles.wrapper}>
      {messages.map((toast) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast
              toast={toast}
              setMessages={setMessages}
            />
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
