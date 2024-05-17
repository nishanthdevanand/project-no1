import React from 'react'
import { Link } from 'react-router-dom'

const Data = ({po}) => {
  return (
    <div>
     <Link to={`/now/${po.id}`}>
    <h1>{po.title}</h1>
    <h3>{po.date}</h3>
    <p>{po.content}</p>
    </Link>
    </div>
  )
}

export default Data