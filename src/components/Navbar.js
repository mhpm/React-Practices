import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = props => {
  //props.history.push('/contact')
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#!" className="navbar-brand">
        React Apps
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/weather">
              Weather
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">
              Todo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
