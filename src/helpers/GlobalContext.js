import { createContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const value = {
        isOpen, setIsOpen
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext