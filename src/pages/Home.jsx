import axios from 'axios'
import { AnimatePresence } from 'framer-motion'
import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Overlay from '../components/modal/Overlay'
import ReactsCounter from '../components/ReactsCounter'
import GlobalContext from '../helpers/GlobalContext'
import '../index.css'


function Home() {

    const { setRotation, setIsHidden, showModal, setIsDisabled, setCurrentJoke} = useContext(GlobalContext)

    const [singleJoke, setSingleJoke] = useState('')
    const [twoPartJoke, setTwoPartJoke] = useState({})
    const [isEmpty, setIsEmpty] = useState(true)

    const getJoke = async () => {
        setIsHidden(false)
        setIsDisabled(true)
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any')
        if (response.data.type === 'single') {
            setSingleJoke(response.data.joke)
            setTwoPartJoke('')
            setIsEmpty(false)
            setRotation(prevState => prevState + 360)
            setIsHidden(true)
            setIsDisabled(false)
            setCurrentJoke({type: 'single', joke: response.data.joke})
        } else {
            setTwoPartJoke({
                setup: response.data.setup,
                delivery: response.data.delivery
            })
            setSingleJoke('')
            setIsEmpty(false)
            setRotation(prevState => prevState + 360)
            setIsHidden(true)
            setIsDisabled(false)
            setCurrentJoke({type: 'twopart', setup: response.data.setup, delivery: response.data.delivery})
        }
    }

    return (
        <>
            <AnimatePresence>
                {showModal && <Overlay />}
            </AnimatePresence>
            <div className='flex flex-col items-center min-h-screen bg-gradient-to-tr from-custom3 to-custom4 justify-start'>
                <div className='flex flex-col min-w-96 max-w-2xl'>
                    <ReactsCounter />
                    <Card singleJoke={singleJoke} twoPartJoke={twoPartJoke} isEmpty={isEmpty} />
                    <Button getJoke={getJoke} />
                </div>
            </div>
        </>
    )
}

export default Home