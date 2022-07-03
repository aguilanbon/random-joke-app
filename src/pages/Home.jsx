import axios from 'axios'
import React, { useState } from 'react'

function Home() {

    const [singleJoke, setSingleJoke] = useState('')
    const [twoPartJoke, setTwoPartJoke] = useState({})

    const getJoke = async () => {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any')
        console.log(response.data);
        if (response.data.type === 'single') {
            setSingleJoke(response.data.joke)
        } else {
            setTwoPartJoke({
                setup: response.data.setup,
                delivery: response.data.delivery
            })
        }
    }

    return (
        <div className='flex w-full h-full'>
            {singleJoke ? <p>singleJoke</p> : <>
                <h2>{twoPartJoke.setup}</h2>
                <p>{twoPartJoke.delivery}</p>
            </>}
            <button className='w-full' onClick={() => getJoke()}>Get Joke</button>
        </div>
    )
}

export default Home