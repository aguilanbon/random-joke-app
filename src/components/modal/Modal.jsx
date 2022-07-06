import React, { useContext } from 'react'
import CloseButton from './CloseButton'
import { motion } from 'framer-motion'
import GlobalContext from '../../helpers/GlobalContext'

function Modal() {

    const {liked} = useContext(GlobalContext)

    return (
        <motion.div animate={{ scale: [0, 1.2, 1] }} exit={{ scale: [1, 1.1, 0] }} className='w-1/2 h-auto bg-custom5 z-50 rounded-lg p-8 relative mx-5 mt-16'>
            <CloseButton />
            <div className='flex flex-col overflow-y-scroll max-h-96'>
                <div className='flex w-full items-center justify-center mb-4'>
                    <h1 className='font-semibold'>Ok, so this made you laugh?.</h1>
                </div>
                <div>
                    {liked.map(jokes => (
                        <div key={jokes.id}>
                            {jokes.type === 'single' ?
                                <div className='text-custom2 my-8 border-l-2 border-custom2'>
                                    <p className='ml-2'>{jokes.joke}</p>
                                </div>
                            : 
                                <div className='my-8 border-l-2 border-custom4'>
                                    <p className='ml-2 text-sm'>{jokes.setup}</p>
                                    <p className='mt-2 ml-8 text-sm font-semibold'>{jokes.delivery}</p>
                                </div>
                            }
                        </div>

                    ))}
                </div>

            </div>


        </motion.div>
    )
}

export default Modal