import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <ul>
    <Link to='/home'><li>Home</li></Link>
    <Link to='/bollywood'><li>Bollywood</li></Link>
    <Link to='/technology'><li>Technology</li></Link>
    </ul>
  )
}

export default Home
