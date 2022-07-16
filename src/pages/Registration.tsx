import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { isPasswordValid, isUsernameValid } from '../helpers/validation'
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

	const { mutate, isError, isLoading } = useMutation((newUser: IUser) =>
		axios
			.post('http://localhost:3000/registration', newUser)
			.then(() => navigate('/login'))
	)

	function handleRegistration(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		mutate({ password, username })
	}

	let isUsername = isUsernameValid(username)
	let isPassword = isPasswordValid(password)

	return (
		<>
			<Navbar
				actionButtonTitle="Log in"
				actionHandler={() => navigate('/login')}
			/>
			<div className="registration-container">
				<div className="box content">
					{isError && <p className="error">Failed to sign up!</p>}
					<form>
						<div className="field">
							<label className="label">Username</label>
							<div className="control has-icons-left">
								<input
									className={`input is-${isUsername ? 'success' : 'danger'}`}
									type="text"
									placeholder="Enter username..."
									value={username}
									onChange={handleUsername}
								/>
								<span className="icon is-small is-left">👤</span>
							</div>
							<p className={`help is-${isUsername ? 'success' : 'danger'}`}>
								{isUsername
									? 'This username is valid'
									: 'Username can not be empty and must consists of 4-12 characters'}
							</p>
						</div>
						<div className="field">
							<label className="label">Password</label>
							<div className="control has-icons-left">
								<input
									className={`input is-${isPassword ? 'success' : 'danger'}`}
									type="text"
									placeholder="Enter password..."
									value={password}
									onChange={handlePassword}
								/>
								<span className="icon is-small is-left">🔐</span>
							</div>
							<p className={`help is-${isPassword ? 'success' : 'danger'}`}>
								{isPassword
									? 'This password is valid'
									: 'Password can not be empty and must consists of 6-15 characters'}
							</p>
						</div>
						<div className="field">
							<p className="control">
								<button
									className={`button is-info ${isLoading && 'is-loading'}`}
									onClick={handleRegistration}
								>
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
