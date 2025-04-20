import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function 
() {
  return (
    <div>
        <Navbar/>

  {/* <div   id="carouselExampleIndicators" className="carousel  slide container  py-4">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div  className="carousel-inner ">
    <div className="carousel-item active">
      <img  src="https://images.pexels.com/photos/6295766/pexels-photo-6295766.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block  w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block  w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block  w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<div class="main-banner-image" id="top">
  <div class="video-overlay header-text">
    <div class="caption">
      <h6>work harder, get stronger</h6>
      <h2>easy with our <em>gym</em></h2>
      <div class="main-button scroll-to-section">
        <a href="#features">Become a member</a>
      </div>
    </div>
  </div>
</div>


  <section className="section  features-section " id="features">
    <div className="container bgcolor">
      <div className="row">
        <div className="col-lg-6   offset-lg-3">
          <div className="section-heading text-center mb-5">
            <h2>
              Choose <em>Program</em>
            </h2>
            <img
              src="https://themewagon.github.io/training-studio/assets/images/line-dec.png"
              alt="waves"
              style={{ width: "80px", marginBottom: "20px" }}
            />
            <p>
              Training Studio is a free CSS template for gyms and fitness centers.
              You are allowed to use this layout for your business website.
            </p>
          </div>
        </div>

        {/* Features List */}
        {[...Array(2)].map((_, colIndex) => (
          <div className="col-lg-6" key={colIndex}>
            <ul className="features-items">
              {[
                ["Basic Fitness", "Please do not re-distribute this template ZIP file on any template collection website."],
                ["New Gym Training", "If you wish to support TemplateMo website via PayPal, please feel free to contact us."],
                ["Basic Muscle Course", 'Credit goes to <a href="https://www.pexels.com" target="_blank" rel="noreferrer">Pexels website</a> for images and video background.']
              ].map(([title, desc], i) => {
                const itemIndex = colIndex * 3 + i;
                const itemTitles = [
                  "Basic Fitness", "New Gym Training", "Basic Muscle Course",
                  "Advanced Muscle Course", "Yoga Training", "Body Building Course"
                ];
                const itemDescs = [
                  "Please do not re-distribute this template ZIP file on any template collection website.",
                  "If you wish to support TemplateMo website via PayPal, please feel free to contact us.",
                  'Credit goes to <a href="https://www.pexels.com" target="_blank" rel="noreferrer">Pexels website</a> for images and video background.',
                  'Browse through Digital Marketing or Corporate templates.',
                  "This template is built on Bootstrap v4.3.1 framework and easy to adapt.",
                  "Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi."
                ];
                return (
                  <li className="feature-item  bgcolor1 " key={itemIndex}>
                    <div className="left-icon">
                      <img
                        src="https://t3.ftcdn.net/jpg/02/94/62/06/360_F_294620656_15DCGIbS2sX2pGRL7CxiaSNA54ir7Woz.jpg"
                        alt={itemTitles[itemIndex]}
                      />
                    </div>
                    <div
                      className="right-content"
                      dangerouslySetInnerHTML={{ __html: `<h4>${itemTitles[itemIndex]}</h4><p>${itemDescs[itemIndex]}</p>` }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section class="section call-to-action" id="call-to-action">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="cta-content">
          <h2>Don’t <em>think</em>, begin <em>today</em>!</h2>
          <p>
            Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, 
            sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.
          </p>
          <div class="main-button scroll-to-section">
            <a href="#our-classes">Become a member</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="col-lg-6 offset-lg-3 pt-3">
  <div className="section-heading">
    <h2>Expert <em>Trainers</em></h2>
    <img src="https://themewagon.github.io/training-studio/assets/images/line-dec.png" alt />
    <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
  </div>
</div>
<div className="row pb-5">
  <div className="col-lg-4">
    <div className="trainer-item">
      <div className="image-thumb">
        <img src="https://themewagon.github.io/training-studio/assets/images/first-trainer.jpg" alt />
      </div>
      <div className="down-content">
        <span>Strength Trainer</span>
        <h4>Bret D. Bowers</h4>
        <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-behance" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="trainer-item">
      <div className="image-thumb">
        <img src="https://themewagon.github.io/training-studio/assets/images/second-trainer.jpg" alt />
      </div>
      <div className="down-content">
        <span>Muscle Trainer</span>
        <h4>Hector T. Daigl</h4>
        <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-behance" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="trainer-item">
      <div className="image-thumb">
        <img src="https://themewagon.github.io/training-studio/assets/images/third-trainer.jpg" alt />
      </div>
      <div className="down-content">
        <span>Power Trainer</span>
        <h4>Paul D. Newman</h4>
        <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-behance" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>




        <Footer/>
    </div>
  )
}
