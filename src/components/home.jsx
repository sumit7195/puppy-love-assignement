import React,{useState, useEffect} from 'react'
import {callBackendApi} from "../utils/index"
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function home() {
 
    const [loading, setLoading] =  useState(false)
    const [puppy, setPuppy] =  useState('')
 

    const fetchList = async()=>{

        setLoading(true)
        const makereq = await callBackendApi('get', 'https://dog.ceo/api/breeds/list/all')
        
        const data =  await makereq.data

        setPuppy(data.message);

        setLoading(false)
    } 

    useEffect(()=>{
        fetchList()
    },[])



console.log(puppy)

let keys = Object.keys(puppy);

console.log(keys);
 






 
 
    return loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    ) : (
    <div>

    <h2 className='text-center'>List of all Breed</h2>

     
     <div>

       {keys?.map((item)=>(

        <div className='d-flex justify-content-between'>
            <span>{item}</span>
            <Link to={`/puppy/${item}`}>See Images</Link>
        </div>

       ))}




     </div>
      



    </div>




  )
}
