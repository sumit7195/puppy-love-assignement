import React,{useState} from 'react'
import { callBackendApi } from '../utils';
import { Spinner } from 'react-bootstrap';
import PuppyListComponent from './PuppyListComponent';

export default function search() {

    const [searchBreed,setSearchBreed] =  useState('');
    const [loading, setLoading] =  useState(false);
    const [searchResult, setSearchResult] = useState('')
    const [err,setErr] = useState('')



    const handleBreed  = (e)=>{

        setSearchBreed(e.target.value)


    }


    const handleSearch = async(e)=>{

        e.preventDefault();
        setLoading(true)
        try{
            if(searchBreed){

                const  makeReq = await callBackendApi('get',`https://dog.ceo/api/breed/${searchBreed}/images`)
      
                console.log(makeReq.data)
                setSearchResult(makeReq.data.message)
                setLoading(false)
            }      
        }
        catch(err){
            setErr('Please enter valid breed name!')
            setLoading(false)
        }
      

    }




  return loading ? (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  ): (
   <div className='d-flex flex-column gap-4'>
        
        <h2 className='text-capitalize text-center'>Search Dog Breed</h2>
          
           <div className='d-flex gap-2 mx-auto'>
           
           <input placeholder='search Dog Breed...' onChange={handleBreed}/>
            <button className='button-muted py-1  px-3' onClick={handleSearch}>Search</button>
           

           </div>
        
           {err && <div className='text-center'>{err}</div>}
       
          {searchResult && <div>
               
               <PuppyListComponent puppyList={searchResult}/>

          </div> }
       
       
        </div>
  )
}
