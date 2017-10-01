import React, { Component } from 'react'

import css from "./TextContent.scss"

class TextContent extends Component {

  render() {

    return (
      <div className="index">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default TextContent;
