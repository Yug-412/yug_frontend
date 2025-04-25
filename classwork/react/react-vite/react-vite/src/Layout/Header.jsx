import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                 <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                 </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/' >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about' >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact'>contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link x" to='/help'>Help</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        </div>
    )
}

export default Header
