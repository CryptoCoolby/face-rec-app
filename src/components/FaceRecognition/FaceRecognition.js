import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, faceScore, isValidUrl, boxes }) => {
	return isValidUrl ?
	(
		<div className='FaceRecognitionr'>
			<span>Face detection score: {faceScore}</span>
			<div className='FaceRecognition center'>
				<div className=''>
					<img className='shadow-5' src={imageUrl} alt='FaceRecognition' id='faceImage' />
					{boxes.map((box, i) => {
						return (
							<div className='boundingBox'
								style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
								key={i}>
							</div>
						)
					})}
				</div>
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
