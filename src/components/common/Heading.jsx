import React from 'react'

const Heading = (props) => {
  return (
    <div className={props.className}>{props.text}</div>
  )
}

export default Heading