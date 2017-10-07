import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./MakerNav.scss"

class MakerNav extends Component {

  render() {
    return (
      <div className="maker-nav">
        <section>
          <button className="tile hover-tile">Save</button>
          <Link to="/">
            <button className="tile hover-tile">Return</button>
          </Link>
        </section>
      </div>
    )
  }
}

export default MakerNav;
