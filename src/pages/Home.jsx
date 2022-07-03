import axios from 'axios'
import React, { useState } from 'react'
import '../index.css'

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
        <div className='flex flex-col'>
            {singleJoke ? <p>{singleJoke}</p> : <>
                <h2 className=''>{twoPartJoke.setup}</h2>
                <p>{twoPartJoke.delivery}</p>
            </>}
            <button className='font-bold bg-green-400 text-red-400' onClick={() => getJoke()}>Get Joke</button>
        </div>
    )
}

export default Home