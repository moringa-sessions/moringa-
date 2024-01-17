import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleQuestion() 
{
  return (
    <div className='container'>
      <h3 className='my-3'>How can i use react</h3>
      <div className='row border-bottom p-3 bg-white mt-3'>

        <div className='col-md-9 row'>
          <div className='col-2 card p-2'>
            <h6>Upvotes 0</h6>
            <h6>Views 0</h6>
            <h6>DownVotes 0</h6>
          </div>
          <div className='col-10 '>
            <p>Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum</p>
            <div className='d-flex gap-3 flex-wrap'>
              <span className='bg-secondary rounded px-2 fs-6 text-white'>React</span>
              <span className='bg-secondary rounded px-2 fs-6 text-white'>Python</span>
              <span className='bg-secondary rounded px-2 fs-6 text-white'>Flask</span>
              <span className='bg-secondary rounded px-2 fs-6 text-white'>React Icons</span>
            </div> 
            <div className='mt-4'>
              <h5>Answers</h5>
              <div>
                <p>Lorem ips ipsum ipsum ipsum</p>
                <hr/>
              </div>
              <div>
                <p>Lorem ips ipsum ipsum ipsum</p>
                <hr/>
              </div>

            </div>
          </div>


        </div>
        <div className='col-md-3 card p-3'>
          <div className='d-flex flex-column'>
            <h6>Quick Learning Links</h6>
            <a href="/" >React</a>
            <a href="/" >Python</a>            
            <a href="/" >Flask</a>
            <a href="/" >Angular</a>
            <a href="/" >Vue JS</a>
            <a href="/" >PHP</a>
            <a href="/" >Laravel</a>
          </div>


          <div className='mt-5'>
            <h6>Hot Questions</h6>
            <p>Why React and Not Angular</p>
            <p>Is F;ask better than Django?</p>
            <p>who determines and at what point how a (larger) airport is configured for operations for the day?</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}
