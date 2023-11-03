import React from 'react'

export default function useScapeKey(callback) {
  function handleDismissAll(event) {
    if (event.key === 'Escape') {
      callback()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleDismissAll)

    return () => {
      document.removeEventListener('keydown', handleDismissAll)
    }
  }, [])
}
