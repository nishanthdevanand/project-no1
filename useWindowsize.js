import { useEffect,useState } from "react"
const useWindowsize=()=>{
    const [windowsize,setwindowsize]=useState({
        width:undefined,
        height:undefined,
    })
    useEffect(()=>{
        const handlesSize=()=>{
            setwindowsize({
                width:window.innerWidth,
                height:window.innerHeight,
            })
        }
        handlesSize()
        window.addEventListener("size",handlesSize)
        return()=>window.removeEventListener("size",handlesSize)
    },[])
    return windowsize
}

export default useWindowsize