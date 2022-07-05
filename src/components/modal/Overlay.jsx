import React from 'react'
import Modal from './Modal'

function Overlay() {
    return (
        <div className='w-full h-full bg-black/[.50] absolute z-10 flex items-center justify-center'>
            <Modal />
        </div>
    )
}

export default Overlay