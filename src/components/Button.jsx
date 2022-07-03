import React from 'react'

function Button({getJoke}) {
  return (
    <div className='flex items-center w-full justify-center'>
        <button className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500  w-40 h-10 mt-10 rounded-md transition duration-300 text-white hover:-translate-y-1 hover:from-cyan-600 hover:to-blue-600' onClick={() => getJoke()}>Get Joke</button>
    </div>
  )
}

export default Button