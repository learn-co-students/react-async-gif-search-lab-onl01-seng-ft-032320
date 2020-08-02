import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => (
                        <li><img src={gif} /></li>
                    ))}
                    {/* <li><img src={this.props.gifs[0].images.original.url}></img></li>
                    <li><img src={this.props.gifs[1].images.original.url}></img></li>
                    <li><img src={this.props.gifs[2].images.original.url}></img></li> */}
                </ul>
            </div>
        )
    }
}