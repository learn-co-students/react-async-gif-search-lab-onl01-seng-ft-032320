import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor() {
        super()

        this.state = {
            searchQuery: ''
        }
    }

    handleInput = event => {
        event.preventDefault();
        // console.log(event.target.value)
        this.setState({
            searchQuery: event.target.value
        }, console.log(this.state))
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.searchQuery) return
        this.props.onHandleSearch(this.state)
    }

    render() {
        return (
            <div>
                <form className={'search-form'} onSubmit={this.handleSubmit}>
                    <label>Search Gif</label>
                    <br></br>
                    <input id={"search"} type={"text"} name={"search"} value={this.state.searchQuery} onChange={this.handleInput}></input>
                    <button id={'search-button'} type={"submit"}>Search</button>
                </form>
            </div>
        )
    }
}
