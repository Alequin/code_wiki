import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./PageSummary.scss"

class PageSummary extends Component {

  constructor(){
    super();
    this.onClickPageSummary = this.onClickPageSummary.bind(this);
  }

  onClickPageSummary(){
    this.props.onClickSummary(this.props.title);
  }

  render() {
    return (
      <Link to={this.props.route} onClick={this.onClickPageSummary}>
        <div className="page-summary">
          <section className="title"><h4>{this.props.title}</h4></section>
          <section className="summary"><p>{this.props.summary}</p></section>
          <section className="tags"><p>{"Tags: " + this.props.tags.join(", ")}</p></section>
        </div>
      </Link>
    )
  }
}

export default PageSummary;
