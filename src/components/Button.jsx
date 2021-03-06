import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import GlobalContext from '../helpers/GlobalContext'

function Button({ getJoke }) {

  const {isDisabled} = useContext(GlobalContext)

  return (
    <div className='flex items-center w-full justify-center mb-10'>
      <motion.button disabled={isDisabled} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500  w-40 h-10 mt-10 rounded-md text-white hover:from-cyan-600 hover:to-blue-600' onClick={() => getJoke()}>Make me laugh</motion.button>
    </div>
  )
}

export default Button