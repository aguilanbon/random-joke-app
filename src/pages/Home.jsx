import axios from 'axios'
import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import GlobalContext from '../helpers/GlobalContext'
import '../index.css'


function Home() {

    const { setRotation, setIsHidden } = useContext(GlobalContext)

    const [singleJoke, setSingleJoke] = useState('')
    const [twoPartJoke, setTwoPartJoke] = useState({})
    const [isEmpty, setIsEmpty] = useState(true)

    const getJoke = async () => {
        setIsHidden(false)
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any')
        if (response.data.type === 'single') {
            setSingleJoke(response.data.joke)
            setTwoPartJoke('')
            setIsEmpty(false)
            setRotation(prevState => prevState + 360)
            setIsHidden(true)
        } else {
            setTwoPartJoke({
                setup: response.data.setup,
                delivery: response.data.delivery
            })
            setSingleJoke('')
            setIsEmpty(false)
            setRotation(prevState => prevState + 360)
            setIsHidden(true)
        }
    }

    return (
        <div className='flex flex-col items-center h-screen bg-gradient-to-tr from-custom3 to-custom4 justify-center'>
            <div className='flex flex-col min-w-96 max-w-2xl'>
                <Card singleJoke={singleJoke} twoPartJoke={twoPartJoke} isEmpty={isEmpty} />
                <Button getJoke={getJoke} />
            </div>
        </div>
    )
}

export default Home