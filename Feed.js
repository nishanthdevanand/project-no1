import React from 'react'
import Data from './Data'

const Feed = ({now}) => {
  return (
    <div>
{
    now.map((po)=>(
        <Data po={po}key={po.id}/>
    ))
    
    
}
    </div>
  )
}

export default Feed