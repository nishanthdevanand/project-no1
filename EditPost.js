import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({now,handleEdit,editTitle,setEditTitle,editContent,setEditContent}) => {
    const {id}=useParams()
    const post=now.find(now=>(now.id).toString()===id);
    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditContent(post.content)
        }
    },[post,setEditTitle,setEditContent])
    return(
        <div>
            {
                editTitle&&
                <>
                    <label>Title:</label>
                    <input type='text' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />
                    <label>Content:</label>
                    <input type='text' value={editContent} onChange={(e)=>setEditContent(e.target.value)} />
                    <button type='submit' onClick={()=>handleEdit(post.id)}>Edit</button>
                </>
            }
            {
                !editTitle&&
                <>
                <p>No post found</p>
                </>
            }
        </div>
    )
  
}

export default EditPost