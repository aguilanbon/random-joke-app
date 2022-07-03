import React from 'react'

function Card({singleJoke, twoPartJoke}) {
  return (
    <div>
        {singleJoke ? <p>{singleJoke}</p> : <>
            <h2 className=''>{twoPartJoke.setup}</h2>
            <p>{twoPartJoke.delivery}</p>
        </>}
    </div>
  )
}

export default Card