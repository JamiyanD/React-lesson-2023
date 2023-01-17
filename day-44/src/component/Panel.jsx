
import React from 'react'
import { useState } from 'react'

export default function Panel(props) {
    const [isActive, setIsActive] = useState(false)
  return (
    <div>
    <h3>{props.title}</h3>
    {isActive ? <p>{props.children}</p> : <button onClick={() => {setIsActive(true)}}>show</button>}

        </div>
  )
}
