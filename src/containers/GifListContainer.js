
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch' 

export default class GifListContainer extends Component {

   state = {
      gifs: []
   }

   componentDidMount(){
      this.getGifs()
   }

   getGifs = (query = "spongebob") => {

      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Ie8Qm2GmVgFkaHA6uQuvi1LlHkQ1Yujp&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(data => this.setState({
         gifs: data.data
      }))

   }

   render() {
      let i = 0
      let gifs = this.state.gifs.map(gif => <GifList key={i += 1} gif={gif}/>)
      return (
         <div>
            < GifSearch handleSubmit={this.getGifs}/>
            <ul>
               {gifs}
            </ul>
         </div>
      )
   }
}

