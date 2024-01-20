import React, { useContext } from 'react'
import { QuestionContext } from '../context/QuestionContext'
import { Link } from 'react-router-dom'

export default function Questions() 
{
  const {questions, updateQuestionViews} = useContext(QuestionContext)


  return (
    <div className='container'>
      <h3 className='my-3'>All Questions {questions.length}</h3>

      {
        questions && questions.length<1 &&
        <div className="alert alert-info text-center" role="alert">
           No questions at the moment!
        </div>
      }

      { questions && questions.map((question, index)=>(
      <div key={index} onClick={()=> updateQuestionViews(question.id)} className='row border-bottom p-3 bg-white mt-3'>
        <div className='col-md-3 d-flex flex-column'>
          <p>{question.answers.length} Answers</p>
          <p>{question.views} Views</p>
        </div>

        <div className='col-md-9 '>
          <Link to={`/question/${question.id}`} className='fw-bold'>{question.title}</Link>
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
