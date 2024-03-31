import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex justify-content-between">
                <Link className="navbar-brand" to="/">SRA Project</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/sign-up/">Sign-Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/emp-login/">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar