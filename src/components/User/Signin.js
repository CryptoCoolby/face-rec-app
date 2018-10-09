import React from 'react'
import './Signin.css'

class Signin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	onSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(this.state)
		}).then(
			(res) => res.json()
		).then((res) => {
			if (res.resolve === true) this.props.onRouteChange('home')
		})
	}
	render() {
		return (
			<main className="tc br3 pa3 ma3 dib bw2 shadow-5 Signin">
				<div className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f4 fw6 ph0 mh0">Sign In</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6"
								htmlFor="email-address">Email</label>
							<input
								className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								onChange={this.onEmailChange}
								type="email"
								name="email-address"
								id="email-address" />
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							<input
								className="ba pa2 input-reset bg-transparent hover-bg-black hover-white w-100"
								onChange={this.onPasswordChange}
								type="password"
								name="password"
								id="password" />
						</div>
					</fieldset>
					<div className="overflow-visible">
						<input
							onClick={this.onSignIn}
							className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib hover-bg-black hover-white"
							type="submit"
							value="Sign in"
						/>
					</div>
				</div>
			</main>
		)
	}
}

export default Signin
