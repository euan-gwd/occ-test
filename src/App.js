import { useState } from 'react'

import Keypad from './components/Keypad'

import './app-styles.scss'

function App() {
  const [result, setResult] = useState({ total: null, next: null, operation: null })

  const handleClick = (buttonName) => {}

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
