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
  notice: <Info/>,
  warning: <AlertTriangle/>,
  success: < CheckCircle />,
  error: < AlertOctagon />,
};

function Toast({message,variant,setShowToast}) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {variant && ICONS_BY_VARIANT[variant]}
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button onClick={()=>setShowToast(false)} className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
