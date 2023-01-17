import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export const HomePage = () => {

    const location = useLocation()
    const state = location.state;
    console.log(state)

  return (
    <div>HomePage
        <h1>{state.message}</h1>
        <p>{state.timestamp}</p>
            <Link to={'/'}>Home</Link>
    </div>
  )
}
