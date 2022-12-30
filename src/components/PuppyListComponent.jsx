import React from 'react'

export default function PuppyListComponent({puppyList}) {
  return (
    <div className='row gy-5  justify-content-center gap-5'>
              
    {puppyList?.map((item,id)=>(
      <div className='col-12  col-sm-5 justify-content-center  gx-0'>
      <div className='rounded-border' style={{overflow:'hidden'}}>
          <img src={`${item}`} alt={id} width="100%" height={350} style={{objectFit:"cover"}}/>
      </div>
      </div>
    ))}

</div>
  )
}
