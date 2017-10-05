import React, { Component } from 'react'

import css from "./TextContentInput.scss"

class TextContentInput extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="input-text-content">
        <input className="tile" type="text" placeholder={this.props.title}/>
        <textarea className="tile" type="textarea" placeholder={this.props.content}/>
        <section className="buttons">
          <button className="tile">Alter Width</button>
        </section>
      </div>
    )
  }
}

export default TextContentInput;
