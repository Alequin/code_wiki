import React, { Component } from 'react'
import { Link } from "react-router-dom"

import SearchBar from "./../Components/SearchBar.jsx"
import TagFilters from "./../Components/TagFilters.jsx"

import css from "./Nav.scss"

class Index extends Component {

  render() {
    return (
      <div className="nav">
        <h1>Wiki</h1>
        <section className="nav-section" >
          <SearchBar placeholder="Search By Title" buttonText="Search" />
        </section>
        <section className="nav-section">
          <TagFilters tags={["SQL", "Java", "Ruby", "Bacon"]}/>
        </section>
      </div>
    )
  }
}

export default Index;
