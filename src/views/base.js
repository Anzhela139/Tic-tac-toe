import React from 'react'
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';
import { useSelector } from 'react-redux'

const modalStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
}

function Base({ content, handleClose, handleBack  }) {
    const menu = useSelector(state => state.menu)
    return (
        <div class="wrapper-menu" style={modalStyles}>
            <div class="screen">
                <div class='modal-header'>
                    {menu.value !== 'StartScreen' && <Icon path={mdiArrowLeft} class='back' size={2} onClick={handleBack} />}
                    <h4 class='modal-title'>{ menu.value }</h4>
                    <Icon path={mdiWindowClose} class='close' size={2} onClick={handleClose} />
                </div>
                { content  }
            </div>
            <div class="fade" onClick={handleClose}></div>
        </div>
    )
}

export default Base