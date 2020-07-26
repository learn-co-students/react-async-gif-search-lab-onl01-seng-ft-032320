import React, { Component } from 'react'

export default class GifSearch extends Component {

   state = {
      query: ""
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.handleSubmit(this.state.query)
   }

   render() {
      return (
         <div style={{float: "right", paddingRight: "20px"}}>
            <h4>Enter a Search Term</h4>
               <form style={{float: "right"}} onSubmit={this.handleSubmit}>
                  <input type="text"
                         name="query" 
                         value={this.state.query}
                         onChange={this.handleChange}/>
                  <br/>
                  <input style={{width: "100%"}}
                         type="submit"/>
               </form>
         </div>
      )
   }
}
