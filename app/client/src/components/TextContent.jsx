import React, { Component } from 'react'

import css from "./TextContent.scss"

class TextContent extends Component {

  render() {
    return (
      <div className="text-content">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default TextContent;
