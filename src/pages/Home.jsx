import axios from 'axios'
import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import '../index.css'

function Home() {

    const [singleJoke, setSingleJoke] = useState('')
    const [twoPartJoke, setTwoPartJoke] = useState({})

    const getJoke = async () => {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any')
        console.log(response.data);
        if (response.data.type === 'single') {
            setSingleJoke(response.data.joke)
            setTwoPartJoke('')
        } else {
            setTwoPartJoke({
                setup: response.data.setup,
                delivery: response.data.delivery
            })
            setSingleJoke('')
        }
    }

    return (
        <div className='flex flex-col items-center h-screen bg-gradient-to-tr from-custom3 to-custom4'>
            <div className='flex flex-col w-96 mt-56'>
                <Card singleJoke={singleJoke} twoPartJoke={twoPartJoke} />
                <Button getJoke={getJoke}/>
            </div>
        </div>
    )
}

export default Home