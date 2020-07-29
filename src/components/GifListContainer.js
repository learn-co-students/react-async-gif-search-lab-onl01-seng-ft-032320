import React, { Component } from 'react'
import GifList from './GifList'


export default class GifListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: []
        }
    }

    setGifs = (gifs) => {
        let gifsArr = []
        gifsArr.push(gifs.data[0].images.original.url)
        gifsArr.push(gifs.data[1].images.original.url)
        gifsArr.push(gifs.data[2].images.original.url)

        this.setState({gifs: gifsArr})
    }

    hitAPI = (searchTerm) => {
        const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=IqqXdeYg0PThGIhFBUsU6VdmUmntescv&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`
      
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => this.setGifs(json))

    }

    componentDidMount() {
        this.hitAPI(this.props.searchTerm)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.searchTerm !== nextProps.searchTerm) {
            this.hitAPI(nextProps.searchTerm)
        }
    }

    render() {
        return (
            <div>
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}
