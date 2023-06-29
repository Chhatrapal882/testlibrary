import React from 'react'

function Green(props) {
  return (
    <div>Hello {props.name ? props.name : 'Levis'}</div>
  )
}

export default Green