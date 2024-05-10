import React from 'react'
import '../../site/Header/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin">
          Start Bootstrap
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul">
            <li className="nav-item">
              <Link className="nav-link  active" to='/admin'>Home</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/admin/products">
                Products
              </Link>
            </li>
            <li className="nav-item dropdown">

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-outline-dark" type="submit">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <span>0</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
