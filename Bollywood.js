import React,{useContext} from 'react'
import {praveen} from './Data'
const Bollywood = () => {
  const [Name,]=useContext(praveen)
  return (
    <div>
         {Name.map(item=><imag src={item.Title} alt='Title'/>)}
</div>
  )
}

export default Bollywood