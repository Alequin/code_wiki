import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./SearchBar.scss"

class SearchBar extends Component {

  render() {
    return (
      <div className="search-container">
        <input type="search" placeholder={this.props.placeholder}></input>
        <button>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default SearchBar;
