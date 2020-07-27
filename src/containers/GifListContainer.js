// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=CbkPRi1NZ1mbZ0OezAQmJjReYzDXji3p

import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const trialSearch = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=CbkPRi1NZ1mbZ0OezAQmJjReYzDXji3p"

export default class GifListContainer extends Component {
    state = {
        gifs: []
      }
    
      render() {
        return(
          <div>
            <GifSearch fetchGIFs={this.fetchGIFs} />
            <GifList gifs={this.state.gifs} />
          </div>
        )
      }
    
      fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=CbkPRi1NZ1mbZ0OezAQmJjReYzDXji3p`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }
    
      componentDidMount() {
        this.fetchGIFs()
      }
}
