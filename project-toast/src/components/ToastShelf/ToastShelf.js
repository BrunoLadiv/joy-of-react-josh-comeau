import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { messages } = React.useContext(ToastContext)
  return (
    <ol
      role='region'
      aria-live='polite'
      aria-label='Notification'
      className={styles.wrapper}>
      {messages.map((toast) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast toast={toast} />
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
