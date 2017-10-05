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
        let tagElement = (
          <li className="tag-element-container" key={index}>
            <label for={index}>{tags[index]}</label>
            <input id={index} type="checkbox" value={tags[index]}></input>
          </li>
        )
        if(index % 2 === 0){
          leftColumnContent.push(tagElement);
        }else{
          rightColumnContent.push(tagElement);
        }
      }
    }

    return (
      <div className="tag-filters_container tile">
        <h4>Tag Filters</h4>
        <section className="tag-filters">
          <div className="column">
            <ul>{leftColumnContent}</ul>
          </div>
          <div className="column">
            <ul>{rightColumnContent}</ul>
          </div>
        </section>
      </div>
    )
  }
}

export default TagFilters;
