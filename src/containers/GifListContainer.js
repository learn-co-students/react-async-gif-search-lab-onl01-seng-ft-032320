import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        query: 'dolphin',
        gifs: []
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({ gifs: data.data })
            console.log(this.state.gifs)
        })
    }

    componentDidUpdate() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({ gifs: data.data })
            console.log(this.state.gifs)
        })
    }

    render() {
        return (
            <div>
                < GifSearch />
                < GifList gifList={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer