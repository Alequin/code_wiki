import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./PageSummary.scss"

class SearchBar extends Component {

  render() {



    return (
      <div className="page-summary">
        <section className="title"><h4>{this.props.title}</h4></section>
        <section className="summary"><p>{this.props.summary}</p></section>
        <section className="tags"><p>{"Tags: " + this.props.tags.join(", ")}</p></section>
      </div>
    )
  }
}

export default SearchBar;
