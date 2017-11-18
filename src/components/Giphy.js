import React, { Component } from 'react';

export default class Giphy extends Component {
  render() {
    return (
      <div className="giphy">
        <img src={this.props.img} alt=""/>
      </div>
    )
  }
}
