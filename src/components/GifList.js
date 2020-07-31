import React from 'react';

const GifList = props => {
    return (
        <div>
            <ul>
                {props.gifs.map ((gif, i) => <li key={i}><img src={`${gif.images.original.url}`} alt=""></img> </li>)}
            </ul>
        </div>
    )
}

export default GifList