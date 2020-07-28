import React, { Component } from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default class GifListContainer extends Component {

    constructor() {
        super()
            this.url = 'https://api.giphy.com/v1/gifs/search?q=Hello There&api_key=dc6zaTOxFJmzC&rating=g'
            this.state = {
                gifObjects: []
        }
    }

    componentDidMount() {
        fetch(this.url)
        .then(res => res.json())
        .then(data => {this.setState({
            gifObjects: data.data.slice(0,3)}
            )
        })
    }

    componentDidUpdate() {

        fetch(this.url)
        .then(res => res.json())
        .then(data => {this.setState({
            gifObjects: data.data.slice(0,3)}
            )
        })
    }

    handleSearch = ({searchQuery}) => {
        this.url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`
    }

    render() {
        return (
            <div>
                <section>
                    <GifSearch onHandleSearch={this.handleSearch}/>
                </section>
                <section>
                    <GifList onGifObjects={this.state.gifObjects} />
                </section>
            </div>
        )
    }
}
