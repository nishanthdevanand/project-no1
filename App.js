import { useEffect, useState } from "react";
import Newpost from "./Newpost";
import About from "./About";
import Home from "./Home";
import Postpage from "./Postpage";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Missing from "./Missing";
import Search from "./Search";
import api from './api/Posts'
import EditPost from "./EditPost";
import useWindowsize from "./hooks/useWindowsize";

function App() {
  const [editTitle,setEditTitle]=useState('')
  const [editContent,setEditContent]=useState('')
  const[Title,setTitle]=useState('')
  const [Content,setContent]=useState('')
  const [search,setSearch]=useState('')
const[filteredResult,setFilteredResult]=useState('')
const Navigate=useNavigate()
const {width}=useWindowsize()
  const[now,setnow]=useState([])
    
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const id=now.length ? now[now.length-1].id+1 :1
    const date=format(new Date(),'dd-mm-yyyy')
    const newitem={id,title:Title,date,content:Content}
    const response=await api.post('/App',newitem)
    
    setnow(response.data)
    setTitle('')
    setContent('')
    Navigate('/')
  }
  const handleDelete=async(id)=>{
    await api.delete(`/App/${id}`)
    const nowlist=now.filter(now=>now.id!==id)
    setnow(nowlist)
    Navigate('/')
  }
  useEffect(()=>{
    const result=now.filter((no)=>(no.title).toLowerCase().includes(search.toLowerCase())||(no.content).toLowerCase().includes(search.toLowerCase()))
    setFilteredResult(result)
  },[now,search])


  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const response=await api.get('/App')
      setnow(response.data)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchData()
  },[])


  const handleEdit=async(id)=>{
    const date=format(new Date(),'dd-MM-yyyy')
    const updateddata={id,title:editTitle,date,content:editContent}
    const response=await api.put(`/App/${id}`,updateddata)
    setnow(response.data)
  }
  return (
    <div>
      <Search search={search}setSearch={setSearch}/>
      <Routes>
      <Route path="/"element={<Home width={width}/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/newpost"element={<Newpost Title={Title}setTitle={setTitle}Content={Content}setContent={setContent}handleSubmit={handleSubmit}/>}/>
      <Route path="/now/:id"element={<Postpage now={now}handleDelete={handleDelete}/>}/>
      <Route path="/Footer"element={<Footer/>}/>
      <Route path="/edit/:id" element={<EditPost now={now} handleEdit={handleEdit}editTitle={editTitle}setEditTitle={setEditTitle}editContent={editContent}setEditContent={setEditContent} />}/>
      <Route path="/Navigation"element={<Navigation/>}/>
      <Route path="*"element={<Missing/>}/>
      </Routes>

    </div>
  );
}

export default App;
