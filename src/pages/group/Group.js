import React, { Component } from 'react';
import FindGroupName from '../../organisms/findGroupName/FindGroupName';
import './Group.css';

class Group extends Component {
  // if group_id=1, then render the flowers. If group_id=2, then render the desserts

  render() {
    return (
      <div>
        <h1>
          Viewing all{' '}
          <FindGroupName group_id={this.props.match.params.groupId} />
        </h1>
      </div>
    );
  }
}

export default Group;
