import React from 'react'

export default function Questions() 
{
  return (
    <div className='container'>
      <h3 className='my-3'>All Questions</h3>
      <div className='row border-bottom p-3 bg-white mt-3'>
        <div className='col-md-3 d-flex flex-column'>
          <p>0 Votes</p>
          <p>0 Answers</p>
          <p>0 Views</p>
        </div>

        <div className='col-md-9 '>
          <h6>Title</h6>
          <p>Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum</p>
          <div className='d-flex gap-3 flex-wrap'>
            <span className='bg-secondary rounded px-2 fs-6 text-white'>React</span>
            <span className='bg-secondary rounded px-2 fs-6 text-white'>Python</span>
            <span className='bg-secondary rounded px-2 fs-6 text-white'>Flask</span>
            <span className='bg-secondary rounded px-2 fs-6 text-white'>React Icons</span>
          </div> 
        </div>
      </div>
    </div>
  )
}
