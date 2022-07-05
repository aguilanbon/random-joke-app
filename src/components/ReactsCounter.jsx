import React, { useContext } from 'react'
import GlobalContext from '../helpers/GlobalContext'

function ReactsCounter() {

  const { thumbsUp, thumbsDown } = useContext(GlobalContext)

  return (
    <div className='flex flex-col items-center justify-center h-36 text-white '>
      <div className='flex flex-row mt-4 w-full items-center justify-around'>
        <div className='w-12 flex flex-col'>
          <h1 className='text-3xl'>🤡</h1>
          <p>{thumbsDown}</p>
        </div>
        <div className='w-12 flex flex-col'>
          <h1 className='text-3xl'>😂</h1>
          <p>{thumbsUp}</p>
        </div>
      </div>
    </div>
  )
}

export default ReactsCounter