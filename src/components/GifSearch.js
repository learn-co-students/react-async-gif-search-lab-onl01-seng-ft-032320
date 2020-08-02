import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('got here')
        this.props.newSearch(this.state.searchTerm)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter a Search Term:</label>
                    <br></br>
                    <input type="text" id="searchTerm" onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit" value='Find Gifs' />
                </form>
            </div>
        )
    }
}