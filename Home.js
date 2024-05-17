import React from 'react'
import { FaMobile,FaTablet, FaLaptop} from "react-icons/fa";
const Home = ({width}) => {
  return (
    <div>
        {
         width<600 ?<FaMobile />:width<900 ?<FaTablet />:<FaLaptop />
        }
    </div>
  )
}

export default Home