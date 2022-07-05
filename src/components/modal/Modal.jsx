import React from 'react'
import CloseButton from './CloseButton'
import { motion } from 'framer-motion'

function Modal() {

    return (
        <motion.div animate={{ scale: [0, 1.2, 1] }} exit={{ scale: [1, 1.1, 0] }} className='w-96 h-72 bg-custom5 z-50 rounded-lg p-8 relative mx-5'>
            <CloseButton />
            <h1>This bad boys right here made you laugh.</h1>
        </motion.div>
    )
}

export default Modal