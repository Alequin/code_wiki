import React, { Component } from 'react'
import connectState from './../services/ConnectState'
import * as actionCreators from "./../redux/actions/MakerActionCreator.js"

import css from "./TextContentInput.scss"

class TextContentInput extends Component {

  constructor(props){
    super(props);

    this.onEditTitle = this.onEditTitle.bind(this)
    this.onEditContent = this.onEditContent.bind(this)
  }

  onEditTitle(event){
    this.props.editTextContentTitle(event.target.value, this.props.position)
    this.forceUpdate()
  }

  onEditContent(event){
    this.props.editTextContentValue(event.target.value, this.props.position)
    this.forceUpdate()
  }

  render() {
    return (
      <div className="content-container">
        <input className="tile" type="text" placeholder="Title"
          onChange={this.onEditTitle}
          value={this.props.content[this.props.position].title}
        />
        <textarea className="tile" type="textarea" placeholder="Content"
          onChange={this.onEditContent}
          value={this.props.content[this.props.position].value}
        />
        <section className="content-buttons">
          <button className="tile hover-tile">Alter Width</button>
        </section>
      </div>
    )
  }
}

export default connectState(TextContentInput, actionCreators, (state) => {
  return state.maker
});
