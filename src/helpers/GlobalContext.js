import { createContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [isHidden, setIsHidden] = useState(false)
    const [funnyCounter, setFunnyCounter] = useState(0)
    const [sadCounter, setSadCounter] = useState(0)

    const value = {
        isOpen, setIsOpen,
        rotation, setRotation,
        isHidden, setIsHidden,
        funnyCounter, setFunnyCounter,
        sadCounter, setSadCounter
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext