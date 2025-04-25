import React from 'react'
import Header from './Header'
import Fotter from './Fotter'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
      <h1 className='bg-danger m-5'>About page</h1>
      <Link className='mx-5' to="action1">Action1</Link>
      <Link to="action2">Action2</Link>
      <Outlet/>
      <Fotter />
    </div>
  )
}

export default About
