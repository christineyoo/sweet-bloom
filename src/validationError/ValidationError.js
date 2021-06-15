import React from 'react';

export default function ValidationError(props) {
  if (props.message) {
    return (
      <span className='error' style={{ color: '#b13c47' }}>
        {props.message}
      </span>
    );
  }
  return <></>;
}
