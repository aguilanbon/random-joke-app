import { createContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [isHidden, setIsHidden] = useState(false)
    const [thumbsUp, setThumbsUp] = useState(0)
    const [thumbsDown, setThumbsDown] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const value = {
        isOpen, setIsOpen,
        rotation, setRotation,
        isHidden, setIsHidden,
        thumbsUp, setThumbsUp,
        thumbsDown, setThumbsDown,
        showModal, setShowModal
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext