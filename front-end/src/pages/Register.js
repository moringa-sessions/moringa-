import React from 'react'

export default function Register() {
  return (
  <div className='container row'>
    <div className='col-md-4'></div>

    <div className='col-md-4 mt-5 card pt-3 pb-4 px-3'>
      <h3 className='text-center mt-4'>Register</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
    </div>

    <div className='col-md-4'></div>
  </div>
  )
}
