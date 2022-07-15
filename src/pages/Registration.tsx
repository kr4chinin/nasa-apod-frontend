import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { IUser } from '../models/IUser'
import './styles/Registration.scss'

const Registration = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	const { mutate, isError } = useMutation((newUser: IUser) =>
		axios
			.post('http://localhost:3000/registration', newUser)
			.then(() => navigate('/login'))
	)

	function handleRegistration(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		mutate({ password, username })
	}

	return (
		<>
			<Navbar buttonTitle="Log in" />
			<div className="registration-container">
				<div className="box content">
					{isError && <p className="error">Failed to sign up!</p>}
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
								<button className="button is-info" onClick={handleRegistration}>
									Sign up
								</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Registration
