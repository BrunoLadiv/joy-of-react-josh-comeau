import React from 'react'

const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [textarea, setTextArea] = React.useState('')
  const [variant, setVariant] = React.useState('notice')
  const [messages, setMessages] = React.useState([])
  function handleDelete(id) {
    setMessages((currentMessages) => {
      const updatedMessages = currentMessages.filter(
        (currenTtoast) => id !== currenTtoast.id
      )
      return updatedMessages
    })
  }
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
    <ToastContext.Provider
      value={{
        textarea,
        setTextArea,
        variant,
        setVariant,
        messages,
        setMessages,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }
