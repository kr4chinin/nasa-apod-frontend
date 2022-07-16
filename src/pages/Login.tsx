import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { IUser } from '../models/IUser'
import './styles/Login.scss'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value)
	}

	function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}

	const { mutate, isError, isLoading, error } = useMutation<any, any, any, any>(
		(user: IUser) =>
			axios.post('http://localhost:3000/login', user).then(response => {
				localStorage.setItem('auth', response.data.token)
				navigate('/feed')
			})
	)

	function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		mutate({ password, username })
	}

	return (
		<>
			<Navbar
				actionButtonTitle="Log in"
				actionHandler={() => navigate('/login')}
			/>
			<div className="login-container">
				<div className="box content">
					{isError && <p className="error">{error?.response.data.message}</p>}
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
								<button
									className={`button is-success ${isLoading && 'is-loading'}`}
									onClick={handleLogin}
								>
									Login
								</button>
							</p>
						</div>
					</form>
					<p className="mt-2">
						Don't have an account?
						<span className="ml-1">
							<Link to="/registration">Sign up</Link>
						</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default Login
