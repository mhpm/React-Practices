import React, { useState, useEffect } from 'react'

const Demo = () => {
  const initialCount = +localStorage.getItem('storageCount') || 0
  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => setCount(currentCount => currentCount + 1)

  const handleDecrement = () => setCount(currentCount => currentCount - 1)

  // useEffect(() => {
  //   setCount(currentCount => currentCount + 1)
  // }, [])

  useEffect(() => localStorage.setItem('storageCount', count), [count])

  return (
    <div>
      <h1>{count}</h1>
      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  )
}

const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
)

export default Demo
