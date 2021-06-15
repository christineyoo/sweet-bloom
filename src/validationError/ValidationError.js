import React from 'react';

export default function ValidationError(props) {
  if (props.message) {
    return (
      <span className='error' style={{ color: 'red' }}>
        {props.message}
      </span>
    );
  }
  return <></>;
}
