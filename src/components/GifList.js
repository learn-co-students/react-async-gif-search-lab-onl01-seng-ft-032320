import React, { Component } from 'react'

export default class GifList extends Component {
   render() {
      return (
         <li>
         <img src={this.props.gif.images.original.url} alt="test" />
         </li>
      )
   }
}