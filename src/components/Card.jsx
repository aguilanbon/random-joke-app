import React, { useContext } from 'react'
import ThumbButton from './ThumbButton'
import { motion, AnimatePresence } from 'framer-motion'
import GlobalContext from '../helpers/GlobalContext'
import Spacer from './Spacer'

function Card({ singleJoke, twoPartJoke, isEmpty }) {

  const { rotation, isHidden } = useContext(GlobalContext)

  return (
    <AnimatePresence initial={false}>
      <motion.div whileHover={{ scale: 1.1 }} animate={{ rotateY: rotation, duration: .8 }} className='flex flex-col items-center justify-center bg-custom5 text-custom2 p-10 rounded-md shadow-2xl mx-5'>
        {isHidden && <>
          {singleJoke && <p>{singleJoke}</p>}
        </>}

        {isHidden && <>
          {twoPartJoke &&
            <>
              <motion.h2 className='w-full text-2xl text-center'>{twoPartJoke.setup}</motion.h2>
              <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 3 } }}
                exit={{ opacity: 0 }} className='mt-6 font-bold'>{twoPartJoke.delivery}</motion.p>
            </>
          }
        </>
        }

        {isEmpty && <p className='mb-8'>Maybe you should press the button. No?</p>}

        {!isEmpty && <Spacer />}

        {isHidden && <ThumbButton />}
      </motion.div>
    </AnimatePresence>
  )
}

export default Card