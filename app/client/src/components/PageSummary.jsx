import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./PageSummary.scss"

class SearchBar extends Component {

  render() {
    return (
      <div className="page-summary">
        <section className="title">{this.props.title}</section>
        <section className="summary">{this.props.summary}</section>
        <section className="tags">{this.props.summary}</section>
      </div>
    )
  }
}

export default SearchBar;
