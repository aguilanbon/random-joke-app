import React, { useContext, useState } from 'react'
import GlobalContext from '../helpers/GlobalContext'

function ThumbButton({ getJoke }) {

    const { setThumbsDown, setThumbsUp } = useContext(GlobalContext)
    const [isClicked, setIsClicked] = useState(null)

    const handleThumbAction = (type) => {
        setIsClicked('none')
        type === 'down' ? setThumbsDown(prev => prev + 1) : setThumbsUp(prev => prev + 1)
    }

    return (
        <div className='w-full flex mt-8 justify-center items-center'>
            <svg pointerEvents={isClicked} onClick={() => handleThumbAction('down')} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 cursor-pointer transition-all duration-500 hover:scale-150 hover:border border-red-500 rounded-md hover:text-gray-700 hover:fill-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
            <svg pointerEvents={isClicked} onClick={() => handleThumbAction('up')} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 cursor-pointer transition-all duration-500 hover:scale-150 hover:border border-green-500 rounded-md hover:text-gray-700 hover:fill-green-500 ml-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        </div>
    )
}

export default ThumbButton