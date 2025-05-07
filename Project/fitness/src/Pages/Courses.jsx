import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Fotter from '../Comman/Fotter'
import Start from '../Comman/Start'
import axios from 'axios'

function Courses() {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  async function fetchdata() {
    const res = await axios.get("http://localhost:3000/cource")
    //  console.log(res.data)
    setdata(res.data)
  }
  return (
    <div>
      <Header />
      <Start title='Course' head='Course' />
      <div>
        {/* Courses Start */}
        <div className="container-fluid courses overflow-hidden py-5" style={{ marginBottom: 90 }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
              <h4 className="text-primary"> Our Courses</h4>
              <h1 className="display-4 text-white mb-4">Out Our Highlights Below</h1>
              <p className="text-white mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            {
              <div className="container my-5">
                <div className="row gy-4 gx-0 justify-content-center">

                  {data.map((user, index) => (
                    <div key={index} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="courses-item">
                        <div className="courses-item-inner p-4">
                          <div className="d-flex justify-content-between mb-4">
                            <div className="courses-icon-img p-3">
                              <img
                                src="https://th.bing.com/th/id/OIP.QtJ2GwBQ-QPfeZtuDafmoQHaF7?w=199&h=180&c=7&r=0&o=5&pid=1.7"
                                className="img-fluid"
                                alt="Course"
                              />
                            </div>
                            <div className="data-info d-flex flex-column">
                              <div className="courses-trainer d-flex align-items-center mb-1">
                                <div className="me-2" style={{ width: 50, height: 50 }}>
                                  <img
                                    src={user.img}
                                    className="img-fluid rounded-circle"
                                    alt="Trainer"
                                  />
                                </div>
                                <p className="mb-0">{user.name}</p>
                              </div>
                              <div className="courses-date">
                                <p className="mb-1">Date: {user.day}</p>
                                <p className="mb-0">Time: {user.time}</p>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="d-inline-block h4 mb-3">{user.title}</a>
                          <p className="mb-4">{user.desc}</p>
                          <a href="#" className="btn btn-primary py-2 px-4">
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* ✅ "More Courses" Button - Only Once */}
                  <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                    <a href="#" className="btn btn-primary py-3 px-5">
                      <span>More Courses</span>
                    </a>
                  </div>

                </div>
              </div>

            }
          </div>
        </div>
        {/* Courses End */}
        {/* Testimonial Start */}
        <div className="container-fluid testimonial bg-dark py-5" style={{ marginBottom: 90 }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
              <h4 className="text-primary">Testimonial</h4>
              <h1 className="display-4 text-white">What Our Customers Are Saying</h1>
            </div>
            <div className="testimonial-carousel owl-carousel wow fadeInUp" data-wow-delay="0.2s">
              <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                <span className="fa fa-quote-left fa-3x quote-icon" />
                <div className="testimonial-img mb-4">
                  <img src="img/testimonial-1.jpg" className="img-fluid" alt="Image" />
                </div>
                <p className="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                </p>
                <div className="d-block">
                  <h4 className="text-white">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                <span className="fa fa-quote-left fa-3x quote-icon" />
                <div className="testimonial-img mb-4">
                  <img src="img/testimonial-2.jpg" className="img-fluid" alt="Image" />
                </div>
                <p className="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                </p>
                <div className="d-block">
                  <h4 className="text-white">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
              <div className="testimonial-item mx-auto" style={{ maxWidth: 900 }}>
                <span className="fa fa-quote-left fa-3x quote-icon" />
                <div className="testimonial-img mb-4">
                  <img src="img/testimonial-3.jpg" className="img-fluid" alt="Image" />
                </div>
                <p className="fs-4 text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi deleniti ratione similique eaque blanditiis fugit voluptas ex officiis expedita repellat doloribus veniam delectus tempore, laudantium, aliquam ad? Rem, accusantium?
                </p>
                <div className="d-block">
                  <h4 className="text-white">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
      <Fotter />
    </div>
  )
}

export default Courses
