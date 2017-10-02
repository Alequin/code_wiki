import React, { Component } from 'react'
import { Link } from "react-router-dom"

import css from "./TagFilters.scss"

class TagFilters extends Component {

  render() {

    let tags = this.props.tags;

    let leftColumnContent = [];
    let rightColumnContent = [];
    if(tags){
      for(let index in tags){
        let tagElement = <li key={index}>{tags[index]}</li>;
        if(index % 2 === 0){
          leftColumnContent.push(tagElement);
        }else{
          rightColumnContent.push(tagElement);
        }
      }
    }

    return (
      <div className="tag-filters tile">
        <div className="column">
          <ul>{leftColumnContent}</ul>
        </div>
        <div className="column">
          <ul>{rightColumnContent}</ul>
        </div>
      </div>
    )
  }
}

export default TagFilters;
