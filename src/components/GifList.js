import React from 'react'

export default function GifList({onGifObjects}) {

    

    return (
        <div>
            <ul>
            {onGifObjects.map(obj => <li><img src={obj.images.original.url}></img></li>)}
            </ul>
        </div>
    )
}

