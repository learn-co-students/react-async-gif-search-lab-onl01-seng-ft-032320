import React from 'react'

function GifList(props) {
    return (
        <div>
            <ul>
                {props.gifList.slice(0, 3).map(gif => <li><img src={gif.images.original.url} /></li>)}
            </ul>
        </div>
    )
}

export default GifList