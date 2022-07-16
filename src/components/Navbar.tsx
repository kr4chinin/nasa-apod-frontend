import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCodeFork,
	faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
	actionButtonTitle: string
	actionHandler: () => void
}

const Navbar: FC<NavbarProps> = ({ actionButtonTitle, actionHandler }) => {
	return (
		<nav className="navbar is-link is-spaced has-shadow is-fixed-top">
			<div className="navbar-brand">
				<p className="navbar-item">Astronomica 🪐</p>

				<p role="button" className="navbar-burger">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</p>
			</div>

			<div className="navbar-menu">
				<div className="navbar-start">
					<Link to='/feed' className="navbar-item">Home</Link>
					<Link to='/favourites' className="navbar-item">Favourites</Link>
					<div className="navbar-item has-dropdown is-hoverable">
						<p className="navbar-link">More</p>
						<div className="navbar-dropdown">
							<p className="navbar-item">About</p>
							<p className="navbar-item">Nasa API</p>
							<p className="navbar-item">Contact</p>
							<hr className="navbar-divider" />
							<p className="navbar-item">Report an issue</p>
						</div>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<p
								className="button is-danger is-inverted"
								onClick={actionHandler}
							>
								<span className="icon">
									<FontAwesomeIcon icon={faArrowRightFromBracket} />
								</span>
								<span>{actionButtonTitle}</span>
							</p>
							<a
								className="button is-dark is-inverted"
								href="https://github.com/kr4chinin"
                                rel='noreferrer'
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
