import React, { Component } from 'react'
import './App.css'
import Form1 from './Components/Post'
import Post from './Components/Form1'

class App extends Component {
	render() {
		return (
			<div className="App">
			{/* <Form1 /> */}
			 <Post />
			</div>
		)
	}
}

export default App