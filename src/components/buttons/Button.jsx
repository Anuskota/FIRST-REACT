import { Link } from 'react-router-dom'
import './Button.css'

import React from 'react'

const Button = () => {
    return (
        <Link to="/collection">
            <button>GO HOME</button>
        </Link>
  )
}

export default Button