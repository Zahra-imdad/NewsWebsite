import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
              <div className='container text-center'>
  <Link className="navbar-brand" to="/">DailyNews</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
    </ul>
  </div>
  </div>
</nav>

        )
    }
}
