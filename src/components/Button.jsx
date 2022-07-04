import React from 'react'
import { motion } from 'framer-motion'

function Button({ getJoke }) {
  return (
    <div className='flex items-center w-full justify-center'>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500  w-40 h-10 mt-10 rounded-md text-white hover:from-cyan-600 hover:to-blue-600' onClick={() => getJoke()}>Get Joke</motion.button>
    </div>
  )
}

export default Button