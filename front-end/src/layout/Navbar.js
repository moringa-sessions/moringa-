import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mt-5">
  <div className="container-fluid">
    <a className="navbar-brand  fs-6 fw-bold" href="/">MO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/questions" className="nav-link active">Questions</Link>
        </li>
        <li className="nav-item">
          <Link to="/addquestion" className="nav-link active">Add Question</Link>
        </li>
        <button className="btn btn-success btn-sm me-3">
          <Link to="/register" className="nav-link active text-white">Register</Link>
        </button>
        <li className="btn btn-success btn-sm">
          <Link to="login" className="nav-link active text-white">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
