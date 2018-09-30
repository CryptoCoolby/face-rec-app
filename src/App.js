import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import $ from 'jquery'
import apiKey from './apiKey'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'

const app = new Clarifai.App({apiKey})
const particlesParams = {
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 3000
			}
		},
		line_linked: {
			shadow: {
				enable: true,
				color: "#3CA9D1",
				blur: 5
			}
		}
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
			imageUrl: '',
			boxes: [],
			faceScore: 0,
			isValidUrl: false
		}
	}
	calculateFaceLocation = (boxes) => {
		boxes = boxes.map(region => region.region_info.bounding_box)
		this.setState({ faceScore: boxes.length })
		const image = $('#faceImage')[0]
		const width = image.width * 1
		const height = image.height * 1
		console.log('Boxes', boxes)
		console.log('Width', width, 'Height', height)
		console.log('Image element', image)
		return boxes.map((box) => ({
			leftCol: box.left_col * width,
			topRow: box.top_row * height,
			rightCol: width - (box.right_col * width),
			bottomRow: height - (box.bottom_row *height)
		}))
	}
	displayFaceBoxes (boxes) {
		this.setState({ boxes })
	}
	onInputChange = (event) => {
		this.setState({ input: event.target.value })
	}
	onDetectSubmit = () => {
		app.models.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
			.then(response => {
				const boxes = response.outputs[0].data.regions
				this.setState({ imageUrl: this.state.input, faceScore: 0, isValidUrl: true })
				if (boxes) this.setState(this.displayFaceBoxes(this.calculateFaceLocation(boxes)))
			}, () => {
			this.setState({ isValidUrl: false })
			}
		)
	}
	render() {
		return (
		<div className="App">
			<Particles
				params={particlesParams}
				className='Particles'
				/>
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm onInputChange={this.onInputChange} onDetectSubmit={this.onDetectSubmit} />
			<FaceRecognition
				boxes={this.state.boxes}
				imageUrl={this.state.imageUrl}
				faceScore={this.state.faceScore}
				isValidUrl={this.state.isValidUrl}
			/>
		</div>
		)
	}
}

export default App
