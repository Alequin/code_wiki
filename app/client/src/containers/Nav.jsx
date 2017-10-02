import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./Nav.scss"

class Index extends Component {

  render() {
    return (
      <div className="nav">
        <h1>Wiki</h1>
        <div className="search-container">
          <input type="search" placeholder="Search By Title"></input>
          <button>Search</button>
        </div>
      </div>
    )
  }
}

export default Index;
