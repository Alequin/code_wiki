import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./Nav.scss"

class Index extends Component {

  render() {
    return (
      <div className="nav">
        <h1>Wiki</h1>
        <label> Search By Page Title
          <div className="search-container">
            <input type="search"></input>
            <button>Search</button>
          </div>
        </label>
      </div>
    )
  }
}

export default Index;
