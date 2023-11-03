import React from 'react'
import { ToastContext } from '../ToastProvider'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ toast }) {
  const { handleDelete } = React.useContext(ToastContext)
  const Icon = ICONS_BY_VARIANT[toast.variant]

  return (
    <div
      id={toast.id}
      key={toast.id}
      className={`${styles.toast} ${styles[toast.variant]}`}
    >
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <p className={styles.content}>
        {toast.message}
        <VisuallyHidden>{toast.variant}</VisuallyHidden>
      </p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => handleDelete(toast.id)}
        className={styles.closeButton}
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
