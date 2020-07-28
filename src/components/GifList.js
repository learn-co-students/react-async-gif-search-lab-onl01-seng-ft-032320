import React from 'react';

const GifList = props =>  {
    return (
      <div className="GifList">
        {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="a gif" />)}
      </div>
    )
  }


export default GifList;