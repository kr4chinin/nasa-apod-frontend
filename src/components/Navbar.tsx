import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCodeFork
} from '@fortawesome/free-solid-svg-icons'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import NavAnchorLink from './NavAnchorLink'

interface NavbarProps {
	actionButtonTitle: string
	actionHandler: () => void
}

const Navbar: FC<NavbarProps> = ({ actionButtonTitle, actionHandler }) => {
	const { data, isError, isFetching } = useQuery(['username'], () =>
		axios.get('http://localhost:3000/username', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('auth')}`
			}
		})
	)

	const [isBurgerActive, setIsBurgerActive] = useState(false)

	return (
		<nav className="navbar is-link is-spaced has-shadow is-fixed-top">
			<div className="navbar-brand">
				<Link to="/feed" className="navbar-item">
					Astronomica 🪐
				</Link>

				<div
					onClick={() => {
						setIsBurgerActive(prev => !prev)
					}}
					className={`navbar-burger burger ${isBurgerActive && 'is-active'}`}
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</div>

			<div className={`navbar-menu ${isBurgerActive && 'is-active'}`}>
				<div className="navbar-start">
					<Link to="/feed" className="navbar-item">
						Home
					</Link>
					<Link to="/favourites" className="navbar-item">
						Favourites
					</Link>
					<div className="navbar-item has-dropdown is-hoverable">
						<p className="navbar-link">More</p>
						<div className="navbar-dropdown">
							<Link to="/about" className="navbar-item">
								About
							</Link>
							<NavAnchorLink title="Nasa API" href="https://api.nasa.gov" />
							<NavAnchorLink
								title="Contact"
								href="https://github.com/kr4chinin"
							/>
							<hr className="navbar-divider" />
							<NavAnchorLink
								title="Report an issue"
								href="https://github.com/kr4chinin/nasa-apod-frontend"
							/>
						</div>
					</div>
				</div>
				<div className="navbar-end">
					<p className={`navbar-item ${isBurgerActive && 'ml-2'}`}>
						{isError || isFetching ? 'Not authorized' : `👤 ${data?.data}`}
					</p>
					<div className="navbar-item">
						<div className="buttons">
							<p
								className={`button is-danger ${
									!isBurgerActive && 'is-inverted'
								}`}
								onClick={actionHandler}
							>
								<span>{actionButtonTitle}</span>
							</p>
							<a
								className={`button is-dark ${!isBurgerActive && 'is-inverted'}`}
								href="https://github.com/kr4chinin"
								rel="noreferrer"
								target="_blank"
							>
								<span className="icon">
									<FontAwesomeIcon icon={faCodeFork} />
								</span>
								<span>Github</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
