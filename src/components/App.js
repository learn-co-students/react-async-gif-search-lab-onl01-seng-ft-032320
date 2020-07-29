import React, { Component } from 'react'


import NavBar from './NavBar'
import GifSearch from './GifSearch'
import GifListContainer from './GifListContainer'


// the App component should render out the GifListContainer component 

// const App = () => {
export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      search: 'blender'
    }
  }

  handleSearchChange = (newSearch) => {
    console.log(`changing search term to ${newSearch}`)
    this.setState({search: newSearch})
  }
  render() {

    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer searchTerm={this.state.search}/>
        < GifSearch newSearch={this.handleSearchChange}/>
    </div>
  )
}
}

