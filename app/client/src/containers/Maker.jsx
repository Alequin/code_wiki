import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/MakerActionCreator.js"

import SummaryContentInput from "./../components/SummaryContentInput.jsx"
import TextContentInput from "./../components/TextContentInput.jsx"

import Page from "./../../../server_src/models/Page.js"

import css from "./Maker.scss"

class Maker extends Component {

  constructor(){
    super()
    this.editTitle = this.editTitle.bind(this);
    this.addTextContent = this.addTextContent.bind(this);
  }

  editTitle(event){
    this.props.editPageTitle(event.target.value);
  }

  addTextContent(){
    this.props.addTextContent();
    this.forceUpdate()
  }

  editContentTitle(position, value){

  }

  editContentBody(position, value){

  }

  buildContentSections(){
    const contentElements = [];
    for(const content of this.props.content){
      let contentElement = null;
      switch(content.type){

        case "text":
          contentElement = <TextContentInput
            position={content.position} />
          break;

      }

      contentElements.push(contentElement);
    }
    return contentElements;
  }

  render() {
    return (
      <div className="maker">

        <nav>
          <input className="tile" type="text" placeholder="Enter Page Title"
            size="1" onChange={this.editTitle} value={this.props.title}
          />
        </nav>

        <section className="maker-content">
          <SummaryContentInput content="Enter a short summary of the page" />
          {this.buildContentSections()}
          <section className="maker-buttons">
            <button className="tile" onClick={this.addTextContent}>Add Text Section</button>
          </section>
        </section>

      </div>
    )
  }
}

function mapStateToProps(state, router) {
   return Object.assign({}, state.maker)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Maker);