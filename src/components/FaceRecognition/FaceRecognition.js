import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, faceScore, isValidUrl }) => {
	console.log(imageUrl, faceScore, isValidUrl)
	return isValidUrl ?
		(
			<div className='FaceRecognition'>
				<span>Face detection score: {faceScore}</span>
				<div className='center'>
					<img className='shadow-5' src={imageUrl} alt='FaceRecognition' id='faceImage' />
				</div>
			</div>
		) : (
			<div className='FaceRecognition'>
				<h4>
					Please enter a valid image URL.
				</h4>
				<p id='examplePhoto'>
					<u>Click here for an example.</u>
				</p>
			</div>
		)
}

export default FaceRecognition
