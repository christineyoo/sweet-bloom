import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import FindGroupName from '../../organisms/findGroupName/FindGroupName';
import './Group.css';
import ItemLink from '../../organisms/itemLink/ItemLink';

class Group extends Component {
  static contextType = ApiContext;

  filterItems = () => {
    const copyItems = this.context.items || [];
    return (
      <div className='shop-flex'>
        {copyItems
          .filter((item) => item.group_id === +this.props.match.params.groupId)
          .map((item, i) => {
            return (
              <ItemLink
                key={i}
                item_id={item.id}
                item_name={item.item_name}
                item_price={item.item_price}
                item_url={item.item_url}
                item_description={item.item_description}
              />
            );
          })}
      </div>
    );
  };

  render() {
    return (
      <div id='group' style={{ textAlign: 'center' }}>
        <h1>
          Shop <FindGroupName group_id={this.props.match.params.groupId} />
        </h1>
        {this.filterItems()}
        <Link to='/shop'>
          <button id='group-button'>Shop All</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Group);
