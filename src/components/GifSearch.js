import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleOnSubmit}>
                    <input
                    type={"text"}
                    value={this.state.search}
                    onChange={event => this.handleChange(event)}
                    >
                    </input>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
