import React, { useState } from 'react'

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue)

  const incrementMethod = () => {
    setCounter(counter + 1)
  }

  const decrementMethod = () => {
    setCounter(counter - 1)
  }

  const resetVal = () => {
    setCounter(initialValue)
  }
    return { incrementMethod, decrementMethod, resetVal, counter };
}
export default useCounter;
