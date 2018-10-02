import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import $ from 'jquery'
import apiKey from './apiKey'
import Signin from './components/User/Signin'
import Signup from './components/User/Signup'
import Header from './components/Header/Header'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'

const app = new Clarifai.App({apiKey})
const particlesParams = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 1000
			}
		},
		line_linked: {
			shadow: {
				enable: false
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
			isValidUrl: false,
			route: 'signin',
			isSignedIn: false
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
				if (boxes) this.displayFaceBoxes(this.calculateFaceLocation(boxes))
			}, () => {
			this.setState({ isValidUrl: false })
			}
		)
	}
	onRouteChange = (route) => {
		this.setState({ route })
		if (route === 'home') this.setState({ isSignedIn: true })
		else this.setState({ isSignedIn: false })
	}
	render() {
		return (
		<div className="App">
			<Particles
				params={particlesParams}
				className='Particles'
			/>
			<Header
				onRouteChange={this.onRouteChange}
				isSignedIn={this.state.isSignedIn}
				route={this.state.route}
			/>
			<div>
				{renderRoute(this)}
			</div>
		</div>
		)
	}
}

const renderRoute = (This) => {
	switch (This.state.route) {
		case 'home':
			return (
				<div>
					<Rank />
					<ImageLinkForm
						onInputChange={This.onInputChange} onDetectSubmit={This.onDetectSubmit}
					/>
					<FaceRecognition
						boxes={This.state.boxes}
						imageUrl={This.state.imageUrl}
						faceScore={This.state.faceScore}
						isValidUrl={This.state.isValidUrl}
					/>
				</div>
			)
		case 'signup':
			return <Signup onRouteChange={This.onRouteChange} />
		default:
			return <Signin onRouteChange={This.onRouteChange} />
	}
}

export default App
