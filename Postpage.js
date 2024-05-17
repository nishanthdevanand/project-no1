
import { Link, useParams } from 'react-router-dom';

const Postpage = ({now,handleDelete}) => {
  const{id}=useParams();
  const nows=now.find(now=>(now.id).toString()===id);
  
  return (
    <div>
        {nows&&
        <>
        <h2>{nows.title}</h2>
        <p>{nows.date}</p>
        <p>{nows.content}</p>
        <button onClick={()=>handleDelete(nows.id)}>Deletepost</button>
        <Link to={`/edit/${nows.id}`}><button>edit</button></Link>
        </>
        }
        {!nows&&
        <>
        <h2>post not found</h2>
        <p>please visit home page</p>
        </>
        }
    </div>
  )
}

export default Postpage