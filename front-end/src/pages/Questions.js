import React, { useContext } from 'react'
import { QuestionContext } from '../context/QuestionContext'

export default function Questions() 
{
  const {questions} = useContext(QuestionContext)


  return (
    <div className='container'>
      <h3 className='my-3'>All Questions {questions.length}</h3>

      { questions && questions.map(question=>(
      <div className='row border-bottom p-3 bg-white mt-3'>
        <div className='col-md-3 d-flex flex-column'>
          <p>{question.answers.length} Answers</p>
          <p>{question.views} Views</p>
        </div>

        <div className='col-md-9 '>
          <h6>{question.title}</h6>
          <p>{question.body}</p>

          <div className='d-flex gap-3 flex-wrap'>
            {(()=>{
              const tagsToArray = question.tags.split(",")
              
              return tagsToArray.map((tag, index)=>(
                <span key={index} className='bg-secondary rounded px-2 fs-6 text-white'>{tag}</span>

              ))

              
              }
              )()
            
            }
          </div> 

        </div>
      </div>
      ))}



    </div>
  )
}
