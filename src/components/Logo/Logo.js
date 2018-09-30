import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './Logo.png'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45, reverse: true }} style={{ height: 150, width: 150 }} >
				<img src={logo} alt='Logo'/>
			</Tilt>
		</div>
	)
}

export default Logo
