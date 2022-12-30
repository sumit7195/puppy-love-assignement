import React,{useState, useEffect} from 'react'
import {callBackendApi} from "../utils/index"
import { Spinner } from 'react-bootstrap'

import {useParams} from "react-router-dom"
import PuppyListComponent from './PuppyListComponent'



export default function puppy() {
  
  const params = useParams();
  const [puppyList, SetPuppyList] =  useState(null);
  const [loading,setLoading] =  useState(false);
const fetchBreedImage = async()=>{
     setLoading(true)
    const id = params.id;
     
    const makeReq =  await callBackendApi('get', `https://dog.ceo/api/breed/${id}/images`)

    SetPuppyList(makeReq.data.message)
      
   setLoading(false)

}


useEffect(()=>{

    fetchBreedImage()

},[])


console.log('puppyList',puppyList)




  
    return loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    ): (
        <>
      <h3 className='text-capitalize text-center'>Puppy  {params.id}</h3>
       <PuppyListComponent puppyList={puppyList}/>
     <div>

  



     </div>


    </>
  
  )
}
