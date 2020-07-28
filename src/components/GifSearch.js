import React from 'react';

export default class GifSearch extends React.Component {

    state = {
        search: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.handleSearch(this.state.search)
    }

    render() {

        return (
            <form className="form" id="addItemForm">
                <input type="text" name="search" onChange={event => this.handleChange(event)} />
                <button className="button" onClick={event => this.handleSubmit(event)}>Search</button>
            </form>
        )
    }
}