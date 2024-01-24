import React from 'react'
import "./index.scss"
import Navbar from '../../Navbar'
import AddForm from '../../../components/AddForm'
import { Helmet } from 'react-helmet-async'

const Add = () => {
  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
    <Navbar></Navbar>

    <main>

        <AddForm></AddForm>
    </main>

    </div>
  )
}

export default Add