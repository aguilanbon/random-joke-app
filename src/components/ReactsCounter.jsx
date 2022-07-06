import React, { useContext } from 'react'
import GlobalContext from '../helpers/GlobalContext'

function ReactsCounter() {

  const { thumbsUp, thumbsDown, setShowModal, setIsLiked } = useContext(GlobalContext)

  return (
    <div className='flex flex-col items-center justify-center h-36 text-white '>
      <div className='flex flex-row mt-4 w-full items-center justify-around'>
        <div className='w-12 flex flex-col justify-center items-center'>
          <h1 onClick={() => {
            setShowModal(true)
            setIsLiked(false)
          }} className='text-3xl cursor-pointer'>🤡</h1>
          <p>{thumbsDown}</p>
        </div>
        <div className='w-12 flex flex-col justify-center items-center'>
          <h1 onClick={() => {
            setShowModal(true)
            setIsLiked(true)
          }} className='text-3xl cursor-pointer'>😂</h1>
          <p>{thumbsUp}</p>
        </div>
      </div>
    </div>
  )
}

export default ReactsCounter