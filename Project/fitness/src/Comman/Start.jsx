import React from 'react'
import { NavLink } from 'react-router-dom'

function Start({title,head}) {

    
    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to=''>Pages</NavLink></li>
                        <li className="breadcrumb-item active text-primary">{head}</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}

        </div>
    )
}

export default Start
