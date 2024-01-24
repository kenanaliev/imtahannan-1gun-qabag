import React from 'react'
import "./index.scss"
import Navbar from '../../Navbar'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Navbar></Navbar>

        <main>

            
        </main>
    </div>
  )
}

export default Home