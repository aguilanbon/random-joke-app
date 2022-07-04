import React, { useContext } from 'react'
import ThumbButton from './ThumbButton'
import { motion } from 'framer-motion'
import GlobalContext from '../helpers/GlobalContext'

function Card({ singleJoke, twoPartJoke, isEmpty }) {

  const { rotation } = useContext(GlobalContext)

  return (
    <motion.div whileHover={{ scale: 1.1 }} animate={{ rotateY: rotation, duration: .8 }} className='flex flex-col items-center justify-center bg-custom5 text-custom2 p-10 rounded-md shadow-2xl mx-5'>
      {singleJoke && <p>{singleJoke}</p>}

      {twoPartJoke && <>
        <h2 className='w-full text-2xl text-center'>{twoPartJoke.setup}</h2>
        <p className='mt-8 font-bold'>{twoPartJoke.delivery}</p>
      </>
      }

      {isEmpty && <p className='mb-8'>Press the button, I guess?</p>}
      {!isEmpty && <ThumbButton />}
    </motion.div>
  )
}

export default Card