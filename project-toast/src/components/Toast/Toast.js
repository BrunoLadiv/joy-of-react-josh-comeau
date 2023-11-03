import React from 'react';

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success:  CheckCircle ,
  error: AlertOctagon ,
};

function Toast({ toast, setMessages }) {
  const Icon = ICONS_BY_VARIANT[toast.variant]

  function handleDelete() {
    setMessages(currentMessages => {
      const updatedMessages = currentMessages.filter(currenTtoast => toast.id !== currenTtoast.id)
      return updatedMessages
    })
  }
  return (
    <div id={toast.id} key={toast.id} className={`${styles.toast} ${styles[toast.variant]}`}>
      <div className={styles.iconContainer}>
        <Icon/>
      </div>
      <p className={styles.content}>
        {toast.message}
      </p>
      <button onClick={() => handleDelete()} className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
