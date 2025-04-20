import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <section className="contact-section py-5">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col">
            <h2 className="fw-bold text-uppercase">Contact <span className="text-danger">Us</span></h2>
            <p className="text-muted">We’d love to hear from you. Fill out the form and we'll get back to you shortly.</p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-danger px-4 py-2">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Get In Touch</h5>
            <p><strong>Address:</strong>Abc estate,Ahemdabad </p>
            <p><strong>Email:</strong> info@fitbullgym.com</p>
            <p><strong>Phone:</strong> +91 7041497621</p>
 
            {/* Optional Map */}
            <div className="map-responsive mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0989247503765!2d-122.41941508468297!3d37.77492977975927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f6f06d87%3A0x35f9d31f63421c5f!2sGym!5e0!3m2!1sen!2sin!4v1618237614580!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

<Footer/>
    </div>
  )
}

export default Contact
