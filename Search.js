import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({Search,setSearch}) => {
  return (
    <div>
<lable>search</lable>
<input type="text"value={Search}onChange={(e)=>setSearch(e.target.value)}/>
<form>
  <ul>
   <li><Link to='/'>Home</Link></li>
   <li><Link to='/newpost'>NewPost</Link></li>
   <li><Link to='/About'>About</Link></li>
   <li><Link to='/postpage'>Postpage</Link></li>
   <li><Link to='/Footer'>Footer</Link></li>
   <li><Link to='/Navigation'>NavigationS</Link></li>
  </ul>
</form>
    </div>
  )
}

export default Search