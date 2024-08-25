import React from 'react'
import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiBeeFlower } from '@mdi/js';
import { mdiSnail } from '@mdi/js';

function Square(props) {
  const [active, setActive] = useState(false)

  const activeStyles = {
    boxShadow: '0px 0px 6px 3px rgba(97,218,251,.75)',
    backgroundColor: 'rgba(97, 218, 251, .75)',
    width: `${100 / props.size}%`,
    transition: '.3s easy-in-out',
  }

  const handleClick = (event) => {
    event.preventDefault()
    setActive(true)
    props.onClick()
  }

  const styleReturn = () => {
    setActive(false)
  }

  return (
    <button
      class={active ? 'tile active' : 'tile'}
      style={active ? activeStyles : { width: `${100 / props.size}%` }}
      onClick={(event) => handleClick(event)}
      onTransitionEnd={styleReturn}
    >
      {props.font === 'cross' ? (
        props.value
      ) : props.value === 'X' ? (
        <span><Icon path={mdiBeeFlower} size={1} /></span>
      ) : props.value === 'O' ? (
        <span><Icon path={mdiSnail} size={1} /></span>
      ) : null}
    </button>
  )
}

export default Square