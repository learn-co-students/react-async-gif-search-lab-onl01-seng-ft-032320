// https://api.giphy.com/v1/gifs/search?q=[QUERY]&api_key=Ie8Qm2GmVgFkaHA6uQuvi1LlHkQ1Yujp&rating=g
// the App component should render out the GifListContainer component 

import React, { Component } from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer' 


export default class App extends Component {
  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
      </div>
    )
  }
}
