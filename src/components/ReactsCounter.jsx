import React, { useContext } from 'react'
import GlobalContext from '../helpers/GlobalContext'

function ReactsCounter() {

    const { funnyCounter, sadCounter } = useContext(GlobalContext)

  return (
    <div className='flex flex-col items-center justify-center h-48 text-white '>
        <div className='flex flex-row mt-4 w-full items-center justify-around'>
            <div className='w-12 flex flex-col items-center'>
                <h1 className='text-3xl'>🤡</h1>
                <h2 className='text-3xl mt-2'>{sadCounter}</h2>
            </div>
            <div className='w-12 flex flex-col items-center'>
                <h1 className='text-3xl'>😂</h1>
                <h2 className='text-3xl mt-2'>{funnyCounter}</h2>
            </div>
        </div>
    </div>
  )
}

export default ReactsCounter