import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ messages, setMessages }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {messages.map((toast) => {
          return (
            <Toast
              toast = {toast}
              setMessages={setMessages}
            />
          )
        })}
      </li>
    </ol>
  )
}

export default ToastShelf
