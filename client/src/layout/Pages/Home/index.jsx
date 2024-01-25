import React from 'react'
import "./index.scss"
import Navbar from '../../Navbar'
import { Helmet } from 'react-helmet-async'
import Product from '../../../components/Product'

const Home = () => {
  return (
    <div>
      

        <Helmet>
          <title>Home</title>
        </Helmet>
        <Navbar></Navbar>
        <main>
        <Product></Product>
        </main>
        

        <main>

            
        </main>
    </div>
  )
}

export default Home