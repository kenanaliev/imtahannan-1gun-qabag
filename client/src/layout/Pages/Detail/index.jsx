import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Navbar'

const Detail = () => {
    const [detail, setdetail] = useState([])
    const {id}=useParams()
    const fetchData=async()=>{
        const res=await axios.get(`http://localhost:7500/${id}`)
        setdetail(res.data)
    }
    useEffect(() => {
      fetchData()
    },[])
    
  return (
    <div>
        <Navbar></Navbar>
      {
        detail ?
        <div className='detailCart' style={{border:'1px solid blue'}}>
        <p>{detail.title}</p>
        <p>{detail.price}$</p>
        <img src={detail.image} height={100} alt="" />
        </div>
        :""
      }
    </div>
  )
}

export default Detail
