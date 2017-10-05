import React, { Component } from 'react'
import { Link } from "react-router-dom"

import SearchBar from "./../components/SearchBar"
import TagFilters from "./../components/TagFilters"

import css from "./Nav.scss"

class Index extends Component {

  render() {
    return (
      <div className="nav">
        <h1>Wiki</h1>
        <section>
          <button className="tile">Add New Page</button>
        </section>
        <section>
          <SearchBar placeholder="Search By Title" buttonText="Search" />
        </section>
        <section className="tag-section">
          <TagFilters tags={["SQL", "Java", "Ruby", "Bacon"]}/>
        </section>
      </div>
    )
  }
}

export default Index;
