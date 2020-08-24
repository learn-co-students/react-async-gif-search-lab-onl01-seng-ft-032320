import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFS(this.state.query)
    }

    handleOnChange = event => {
        this.setState({
            query: event.target.value
        })
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleOnChange}/>
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default GifSearch