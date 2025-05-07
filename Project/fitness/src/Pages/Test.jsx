import React from 'react'
import Header from '../Comman/Header'
import Fotter from '../Comman/Fotter'
import Start from '../Comman/Start'

function Test() {
    return (
        <div>

<Header/>
<Start title=' Test' head='test'/>
            {/* Testimonial Start */}
            <div className="container-fluid testimonial bg-dark py-5" style={{ margin: '90px 0' }}>
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
            <Fotter/>
</div>

            )
}

            export default Test
