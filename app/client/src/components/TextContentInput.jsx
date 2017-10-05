import React, { Component } from 'react'

import css from "./TextContentInput.scss"

class TextContentInput extends Component {

  render() {
    return (
      <div className="input-text-content">
        <input className="tile" type="text" placeholder={this.props.title}/>
        <div>
          <textarea className="tile" type="textarea" placeholder={this.props.content}/>
        </div>
      </div>
    )
  }
}

export default TextContentInput;
