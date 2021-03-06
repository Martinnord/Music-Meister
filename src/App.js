import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  
  search() {
    console.log(this.state.query)
  }
  
  render() {
    return (
      <div className="app">
        <div className="title">Music Meister</div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search an artist" query={this.state.query} onChange={event => {this.setState({query: event.target.value})}}/>
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App