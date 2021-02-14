import { useState } from 'react'

import Keypad from './components/Keypad'

import './app-styles.scss'

function App() {
  const [result, setResult] = useState({ total: 0, next: 0, operation: 0 })

  const handleClick = (value) => {
    const checkNumberRegex = /\d{1}/
    if (checkNumberRegex.test(value)) {
      setResult({ ...result, next: Number(value) })
    }
  }

  return (
    <div className="app">
      <div className="app-main">
        <div className="result-display">{result.next || result.total || `0`}</div>
        <Keypad handleOnClick={handleClick} />
      </div>
    </div>
  )
}

export default App
