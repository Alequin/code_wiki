import React, { Component } from 'react'
import { Link } from "react-router-dom"

import SearchBar from "./../../components/SearchBar"
import TagFilters from "./../../components/TagFilters"

import css from "./IndexNav.scss"

class Index extends Component {

  render() {
    return (
      <div className="index-nav">
        <section>
          <Link to="maker">
            <button className="tile hover-tile">Add New Page</button>
          </Link>
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
