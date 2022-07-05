import React from 'react'
import CloseButton from './CloseButton'

function Modal() {
    return (
        <div className='w-96 h-72 bg-custom5 z-50 rounded-lg p-8 relative mx-5'>
            <CloseButton />
            <h1>This bad boys right here made you laugh.</h1>
        </div>
    )
}

export default Modal