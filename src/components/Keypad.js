import React from 'react'

import './keypad-styles.scss'

const Keypad = () => {
  const keypadLayout = [
    'AC',
    `CE`,
    ` `,
    `÷`,
    `7`,
    `8`,
    `9`,
    `x`,
    `4`,
    `5`,
    `6`,
    `-`,
    `1`,
    `2`,
    `3`,
    `+`,
    `0`,
    ` `,
    `.`,
    `=`,
  ]
  return (
    <div className="keypad">
      {keypadLayout.map((item, idx) => (
        <button className="keypad-key" key={`${item}-${idx}`}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default Keypad
