import React, { Component } from 'react'
import { Link } from "react-router-dom"

import SearchBar from "./../Components/SearchBar.jsx"

import css from "./Nav.scss"

class Index extends Component {

  render() {
    return (
      <div className="nav">
        <h1>Wiki</h1>
        <SearchBar placeholder="Search By Title" buttonText="Search"/>
      </div>
    )
  }
}

export default Index;
