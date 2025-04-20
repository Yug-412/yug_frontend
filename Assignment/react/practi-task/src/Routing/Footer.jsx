import React from 'react'

function Footer() {
  return (
    <div>
 <footer className="bg-body-tertiary bg-dark-subtle text-center">
  {/* Grid container */}
  <div className="container p-4">
    {/* Section: Images */}
    <h1  className=' fs-1  '><span className=' brand-name fs-1'>Fitbull</span> FITTNESS</h1>
    <section className>
      <div className="row">
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div data-mdb-ripple-init className="bg-image hover-overlay shadow-1-strong rounded" data-ripple-color="light">
            <img src="https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100 rounded" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div data-mdb-ripple-init className="bg-image hover-overlay shadow-1-strong rounded" data-ripple-color="light">
            <img src="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100 rounded" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div data-mdb-ripple-init className="bg-image hover-overlay shadow-1-strong rounded" data-ripple-color="light">
            <img src="https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100 rounded" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div data-mdb-ripple-init className="bg-image hover-overlay shadow-1-strong rounded" data-ripple-color="light">
            <img src="https://images.pexels.com/photos/1554824/pexels-photo-1554824.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100 rounded" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div data-mdb-ripple-init className="bg-image hover-overlay shadow-1-strong rounded" data-ripple-color="light">
            <img  src="https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100 rounded" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div data-mdb-ripple-init className="bg-image hover-overlay shadow-1-strong rounded" data-ripple-color="light">
            <img src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600 " className="w-100 rounded" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Images */}
  </div>
 
  {/* Grid container */}
<footer className="bg-body-tertiary bg-dark-subtle border-top border-dark-subtle  text-center bg-black">
  {/* Grid container */}
  <div className="container p-4 pb-0 ">
    {/* Section: Social media */}
    <section className="mb-4 ">
      {/* Facebook */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Twitter */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
      {/* Google */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a>
      {/* Instagram */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
      {/* Linkedin */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      {/* Github */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!" role="button"><i className="fab fa-github" /></a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center text-light p-3 bg-black" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2025 Copyright:
    <a className=" text-light" href="">Fitbull.com</a>
  </div>
  {/* Copyright */}
</footer>

</footer>

    </div>
  )
}

export default Footer
