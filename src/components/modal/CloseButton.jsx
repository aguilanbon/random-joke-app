import React from 'react'

function CloseButton() {
    return (
        <div className='absolute h-6 w-6 rounded-full bg-red-300 text-white cursor-pointer flex flex-col content-center text-center items-center justify-center top-0 right-0 -mt-2 -mr-2'>
            <p className='h-auto text-xs'>x</p>
        </div>
    )
}

export default CloseButton