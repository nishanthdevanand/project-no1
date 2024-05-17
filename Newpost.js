import React from 'react'

const Newpost = ({Title,setTitle,Content,setContent,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={Title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Content</label>
            <input type='text' value={Content} onChange={(e)=>setContent(e.target.value)} />
            <button>add</button>
        </form>
    </div>
  )
}

export default Newpost