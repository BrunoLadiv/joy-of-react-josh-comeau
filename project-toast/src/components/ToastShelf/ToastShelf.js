import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import {ToastContext} from '../ToastProvider'

function ToastShelf() {
  const {messages, setMessages} = React.useContext(ToastContext)
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
