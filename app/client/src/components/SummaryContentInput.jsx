import React, { Component } from 'react'

import css from "./SummaryContentInput.scss"

class TextContentInput extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="content-container">
        <h3>Summary</h3>
        <textarea className="tile" type="textarea" placeholder={this.props.content} onKeyUp={this.props.onTextChange}/>
        <section className="content-buttons">
          <button className="tile">Alter Width</button>
        </section>
      </div>
    )
  }
}

export default TextContentInput;
