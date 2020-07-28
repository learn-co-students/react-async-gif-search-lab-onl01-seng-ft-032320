import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        photos: []
    }

    handleSearch = value => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=VrYo1il2SlFEfH7TqwZHphbS4io20TAa&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(({ data }) => {
                this.setState({ photos: data.map(gif => ({ url: gif.images.original.url })) })
            })
    }

    render() {
        return (
            <div>
                <GifList photos={this.state.photos} />
                <GifSearch handleSearch={this.handleSearch} />
            </div>
        )


    }


}