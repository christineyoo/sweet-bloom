import React, { Component } from 'react';

class findGroupName extends Component {
  findGroupName = () => {
    if (+this.props.group_id === 1) {
      return 'Flowers';
    } else {
      return 'Desserts';
    }
  };
  render() {
    return <>{this.findGroupName()}</>;
  }
}

export default findGroupName;
