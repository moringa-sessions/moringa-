import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { QuestionContext } from '../context/QuestionContext'
import { UserContext } from '../context/UserContext'

export default function SingleQuestion() 
{
  const [question, setQuestion] = useState([])
  const [body, setBody] = useState()

  const {questions,deleteQuestion, addAnswer} = useContext(QuestionContext)
  const {currentUser} = useContext(UserContext)

  const {id} = useParams()

  useEffect(()=>{
    const x =questions.find((question)=> { 
        return question.id===parseInt(id) }
      )
      setQuestion(x)


  }, [id, questions])



  const handleSubmit = (e)=>{
    e.preventDefault()

    // call your useContext function
    addAnswer(question.id,  body)

    // Clear your form
    setBody("")
  }

  return (
    <div className='container'>
      <h3 className='my-3'>{question && question.title}</h3>
      <div className='row border-bottom p-3 bg-white mt-3'>

        <div className='col-md-9 row'>
          <div className='col-2 card p-2'>
            <h6>Views {question && question.views}</h6>
            { (currentUser && currentUser.id)===(question && question.user && question.user.id) &&
             <button onClick={()=>deleteQuestion(question.id)} type="button" class="btn btn-danger btn-sm">Delete question</button>
            }
          </div>
          <div className='col-10 '>
            <p>{ question && question.body}</p>
            <div className='d-flex gap-3 flex-wrap'>
            {(()=>{
              const tagsToArray = question && question.tags && question.tags.split(",")
              
              return tagsToArray && tagsToArray.map((tag, index)=>(
                <span key={index} className='bg-secondary rounded px-2 fs-6 text-white'>{tag}</span>

              ))

              
              }
              )()
            
            }
            </div> 
            <p className='mt-3'>Posted by <span className='fw-bold'>{ question && question.user && question.user.username}</span></p>

            <div className='mt-4'>

              <form onSubmit={handleSubmit} className="">
                <div className="mb-3">
                  <label className="form-label">Your Answer</label>
                  <textarea type="text" value={body} onChange={(e)=>setBody(e.target.value)} rows={3} className="form-control" required placeholder="Type here" > 
                  </textarea>
                </div>
                {currentUser?
                  <button type="submit" className="btn btn-success">Submit an answer</button>
                  :
                  <p className='text-secondary'>Login to submit an answer</p>
                }
                  </form>

              <h5 className='my-3'>Answers</h5>


              {question && question.answers && question.answers.map((answer,index)=>(
                <div key={index}>
                  <p>{answer.body}</p>
                  <hr/>
                </div>
              ))}

            

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
