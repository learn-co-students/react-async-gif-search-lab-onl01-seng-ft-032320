import React, {Component} from 'react';

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchData: ""
    }
  }

  handleChange = event => {
    this.setState({
      searchData: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {event.preventDefault(); this.props.handleSubmit(this.state.searchData)}}>
          <label>Enter a Search Term:</label><br/>
          <input type="text" name="search" onChange={event => this.handleChange(event)} value={this.state.searchData} /><br/>
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    )
  }
}
