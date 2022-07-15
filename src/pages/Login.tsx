import React, { useState } from 'react'
import './styles/Login.scss'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	return (
		<div className='login-container'>
			<div className="box content">
				<form>
					<div className="field">
						<label className="label">Username</label>
						<div className="control has-icons-left">
							<input
								className="input is-success"
								type="text"
								placeholder="Enter username..."
								value={username}
								onChange={handleUsername}
							/>
							<span className="icon is-small is-left">👤</span>
						</div>
					</div>
					<div className="field">
						<label className="label">Password</label>
						<p className="control has-icons-left">
							<input
								className="input"
								type="text"
								placeholder="Enter password..."
								value={password}
								onChange={handlePassword}
							/>
							<span className="icon is-small is-left">🔐</span>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<button className="button is-success">Login</button>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
