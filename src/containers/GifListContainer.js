import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifArray: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(gifs => {
            this.setState({
                gifArray: gifs.data
            })
        })
      
    }

    onSubmit = event => {
        event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.search.value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifs => {
            this.setState({
                gifArray: gifs.data
            })
        })
    }
    render(){
        
        return(
            <div>
            <GifList gifs={this.state.gifArray}/>
            <GifSearch submitHandler={this.onSubmit}/>
            </div>
        )
    }

}

export default GifListContainer