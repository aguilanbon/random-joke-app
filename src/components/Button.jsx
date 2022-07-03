import React from 'react'

function Button({getJoke}) {
  return (
    <>
        <button className='font-bold bg-green-400 text-red-400' onClick={() => getJoke()}>Get Joke</button>
    </>
  )
}

export default Button