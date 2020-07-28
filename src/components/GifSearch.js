import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div className="searchBox">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch;