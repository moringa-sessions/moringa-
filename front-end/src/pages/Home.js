import { Link } from "react-router-dom"
import landing from "../images/landing.png"

export default function Home() {
  return (
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row " style={{height:"80vh"}}>
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>You Submit, We Answer</h1>
          <h2>We are team of talented developers ready to support any developer stuck</h2>
          <div className="d-flex justify-content-center gap-4 justify-content-lg-start">
            <Link to="/register" className="btn btn-success rounded-0 text-white">Get Started</Link>
            <Link to="/addquestion" className="btn btn-dark rounded-0 text-white">Add Question </Link>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-centerorder-1 order-lg-2">
           <img src={landing} className="img-fsluid w-100 h-auto" alt="" />
        </div>
      </div>
    </div>

  </section>
  )
}
