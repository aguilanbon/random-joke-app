import React from 'react'

function Card({singleJoke, twoPartJoke}) {
  return (
    <div className='flex flex-col items-center justify-center bg-custom5 text-custom2 p-10 rounded-md shadow-2xl'>
        {singleJoke ? <p>{singleJoke}</p> : <>
            <h2 className='w-full text-2xl text-center'>{twoPartJoke.setup}</h2>
            <p className='mt-8 font-bold'>{twoPartJoke.delivery}</p>
        </>}
    </div>
  )
}

export default Card