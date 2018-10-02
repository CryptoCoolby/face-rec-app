import React from 'react'
import './Signin.css'

const Signup = ({ onRouteChange }) => {
	return (
	<main className="tc br3 pa3 ma3 dib bw2 shadow-5 Signin">
		<div className="measure center">
			<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				<legend className="f4 fw6 ph0 mh0">Sign Up</legend>
				<div className="mt3">
					<label className="db fw6 lh-copy f6" htmlFor="username">Name</label>
					<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
				</div>
				<div className="mt3">
					<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
				</div>
				<div className="mv3">
					<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					<input className="ba pa2 input-reset bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
				</div>
				<div className="mv3">
					<label className="db fw6 lh-copy f6" htmlFor="repeat">Repeat Password</label>
					<input className="ba pa2 input-reset bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="repeat" />
				</div>
			</fieldset>
			<div className="overflow-visible">
				<input
					onClick={() => onRouteChange('signin')}
					className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib hover-bg-black hover-white"
					type="submit"
					value="Sign Up"
				/>
			</div>
		</div>
	</main>
	)
}

export default Signup
