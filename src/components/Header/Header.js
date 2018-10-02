import React from 'react'
import Navigation from './Navigation/Navigation'
import Logo from './Logo/Logo'
import './Header.css'

const Header = ({ onRouteChange, isSignedIn, route }) => {
	return (
		<header className='Header'>
			<Logo />
			<Navigation
				onRouteChange={onRouteChange}
				isSignedIn={isSignedIn}
				route={route}
			/>
		</header>
	)
}

export default Header
