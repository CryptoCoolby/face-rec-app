import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
	return (
		isSignedIn
		?	<nav style={{display: 'inline-block'}}>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		: ( (route === 'signin')
			?	<nav style={{display: 'inline-block'}}>
					<p onClick={() => onRouteChange('signup')} className='f3 link dim black underline pa3 pointer'>Sign Up</p>
				</nav>
			:	<nav style={{display: 'inline-block'}}>
					<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
				</nav>
		)

	)
}

export default Navigation
