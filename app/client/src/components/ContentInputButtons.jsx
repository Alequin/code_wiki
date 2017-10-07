import React, { Component } from 'react'

import css from './ContentInputButtons.scss'

class ContentInputButtons extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <section className="content-buttons">
        <button className="tile hover-tile"
          onClick={this.props.onClickAlterWidth}>
          Alter Width
        </button>
      </section>
    )
  }
}

export default ContentInputButtons;
