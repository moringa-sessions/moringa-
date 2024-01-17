import { useContext, useState } from "react"
import question from "../images/question.png"
import { QuestionContext } from "../context/QuestionContext"

export default function AddQuestion() 
{
  const {addQuestion} = useContext(QuestionContext)

  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [tags, setTags] = useState()


  const handleSubmit = (e)=>{
    e.preventDefault()

    // call your useContext function
    addQuestion(title, body, tags)

    // Clear your form
    setBody("")
    setTags("")
    setTitle("")
  }

  return (
  <div className='container row pt-5'>
    <div className='col-md-6 h-100 bg-success'>
      <img src={question} className="w-100 img-fluid" />
    </div>

    <div className='col-md-6 card  w-full pt-3 pb-4 px-lg-5'>
      <h3 className='text-center mt-4 mb-2'>Add a question</h3>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea type="text" value={body} onChange={(e)=>setBody(e.target.value)} rows={9} className="form-control" required placeholder="Type here" > 
          </textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Tags(separate with Comma)</label>
          <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success w-100">Post</button>
      </form>
    </div>

  </div>
  )
}
