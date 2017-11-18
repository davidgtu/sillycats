import React, { Component } from 'react';

export default class KittyButton extends Component {
  render() {
    return (
      <button onClick={this.props.click}>GIVE ME KITS</button>
    )
  }
}
