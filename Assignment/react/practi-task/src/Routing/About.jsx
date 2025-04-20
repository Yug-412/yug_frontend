import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <div>
      <Navbar/>
    
      <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
              alt="Gym Training"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <h2 className="text-uppercase fw-bold mb-4">About <span className="text-danger">Fitbull</span></h2>
            <p className="mb-3">
              Welcome to <strong>Fitbull Gym</strong> – your ultimate destination for fitness, strength, and health. We offer
              world-class training programs, certified coaches, and a supportive community that motivates you to reach
              your full potential.
            </p>
            <p className="mb-4">
              Whether you're here to build muscle, lose weight, or improve your overall wellness, we have the right tools
              and environment to help you succeed. Join our fitness family today and transform your life with confidence!
            </p>
            <a href="#contact" className="btn btn-danger px-4 py-2 rounded-pill">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  )
}

export default About
