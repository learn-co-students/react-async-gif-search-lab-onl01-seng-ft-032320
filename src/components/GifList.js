import React, { Component } from 'react'

export default class GifList extends Component {
    render() {

        let list = this.props.listOfGifs.map((gif, index) => {
            return <li key={index}><img  src={gif}/></li>
        })
        return (
            
            <div>
               <ul>
                {list}
               </ul> 
            </div>
        )
    }
}
