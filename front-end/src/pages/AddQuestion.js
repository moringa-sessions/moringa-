import question from "../images/question.png"

export default function AddQuestion() {
  return (
  <div className='container row pt-5'>
    <div className='col-md-6 h-100 bg-success'>
      <img src={question} className="w-100 img-fluid" />
    </div>

    <div className='col-md-6 card  w-full pt-3 pb-4 px-lg-5'>
      <h3 className='text-center mt-4 mb-2'>Add a question</h3>
      <form className="">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea type="text" rows={9} className="form-control" placeholder="Type here" > 
          </textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Tags(separate with Comma)</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success w-100">Post</button>
      </form>
    </div>

  </div>
  )
}
