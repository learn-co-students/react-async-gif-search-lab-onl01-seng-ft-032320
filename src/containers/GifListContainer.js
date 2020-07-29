import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  handleSubmit = (data) => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${data}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let newList = json.data.splice(0,3);
        this.setState({ list: newList})
      })
  }


  render() {
    return (
      <div>
        <GifList list={this.state.list} />

        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
