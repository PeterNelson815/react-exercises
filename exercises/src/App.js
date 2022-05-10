import React, { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'
import CounterDisplay from './components/CounterDisplay'

import CountContext from './provider/context'

const App = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount(count+1)
  const onDecrement = () => setCount(count-1)

  return (
    <CountContext.Provider value={{ count, onIncrement, onDecrement }}>
      <div className="App">
        <IncrementButton />
        <DecrementButton />
        <CounterDisplay />
      </div>
    </CountContext.Provider>
  )
}

export default App
