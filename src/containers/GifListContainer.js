import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let searchValue = event.target.querySelector("input").value
        this.setState({
            gifs: []
        })
        let tempArray = []
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=iTo5JCrXNuzXxzNyvpUJXX8Y2nl3pZ48`)
        .then(response => response.json())
        .then(data => {

            // this.setState({
            //     gifs: data.data.map(gif => {gif.images.original.url
            //     })
            // })
            
            for(let i = 0; i < 3; i++) {
                tempArray.push(data.data[i].images.original.url)
            }

            this.setState({
                gifs: tempArray
            })
        })
        
    }
    

    render() {
        console.log(this.state.gifs)
        return (
            <div>
                <GifList listOfGifs={this.state.gifs}/>
                <GifSearch handleOnSubmit={this.handleSubmit}/> 
            </div>
        )
    }
}
