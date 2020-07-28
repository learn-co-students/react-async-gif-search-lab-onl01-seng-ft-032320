import React, { Component } from 'react';
import GifSearch from './GifSearch'
import GifList from './GifList'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGifs = query => {
    let fetchURL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Ie8Qm2GmVgFkaHA6uQuvi1LlHkQ1Yujp&rating=g&limit=3`

    fetch(fetchURL)
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
    })
  }

  componentDidMount() {
    console.log('mounted')
    this.fetchGifs()
  }

  render() {
    return (
      <div>
      <GifSearch fetchGifs={this.fetchGifs} />
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;