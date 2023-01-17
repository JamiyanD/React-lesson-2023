import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export const AboutPage = () => {

    const location = useLocation()
    const state = location.state;
    console.log(state)

  return (
    <div>AboutPage
        <h1>{state.message}</h1>
        <p>{state.timestamp}</p>
            <Link to={'/'}>Home</Link>
    </div>
  )
}
