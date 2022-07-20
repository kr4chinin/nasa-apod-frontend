import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { isPasswordValid, isUsernameValid } from '../helpers/validation'
import { IUser } from '../models/IUser'
import {
	ErrorResponse,
	RegistrationSuccessResponse
} from '../types/ErrorResponse'
import './styles/Registration.scss'

const Registration = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isFocused, setIsFocused] = useState({
		username: false,
		password: false
	})
	const navigate = useNavigate()

	const { mutate, isError, isLoading, error } = useMutation<
		RegistrationSuccessResponse,
		ErrorResponse,
		IUser
	>(newUser =>
		axios.post(
			'https://nasa-apod-project-backend.herokuapp.com/registration',
			newUser
		)
	)

	function handleRegistration(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		mutate(
			{ password, username },
			{
				onSuccess: () => navigate('/login')
			}
		)
	}

	function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	function handleUsernameFocus(e: React.FocusEvent<HTMLInputElement>) {
		setIsFocused({ ...isFocused, username: true })
	}

	function handlePasswordFocus() {
		setIsFocused({ ...isFocused, password: true })
	}

	function handleUsernameBlur() {
		setIsFocused({ ...isFocused, username: false })
	}

	function handlePasswordBlur() {
		setIsFocused({ ...isFocused, password: false })
	}

	let isUsername = isUsernameValid(username)
	let isPassword = isPasswordValid(password)

	return (
		<>
			<Navbar
				actionButtonTitle="📲 Log in"
				actionHandler={() => navigate('/login')}
			/>
			<div className="registration-container">
				<div className="box content">
					{isError && <p className="error">{error?.response.data.message}</p>}
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
									onFocus={handleUsernameFocus}
									onBlur={handleUsernameBlur}
								/>
								<span className="icon is-small is-left">👤</span>
							</div>
							<p
								className={`help is-${isUsername ? 'success' : 'danger'} ${
									!(isFocused.username || isUsername) && 'is-hidden'
								}`}
							>
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
									type="password"
									placeholder="Enter password..."
									value={password}
									onChange={handlePassword}
									onFocus={handlePasswordFocus}
									onBlur={handlePasswordBlur}
								/>
								<span className="icon is-small is-left">🔐</span>
							</div>
							<p
								className={`help is-${isPassword ? 'success' : 'danger'} ${
									!(isFocused.password || isPassword) && 'is-hidden'
								}`}
							>
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
