import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCodeFork,
	faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

const Navbar = () => {
	return (
		<nav className="navbar is-link is-spaced has-shadow is-fixed-top">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					Astronomica
				</a>

				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item">Home</a>
					<a className="navbar-item">Favourites</a>
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">More</a>
						<div className="navbar-dropdown">
							<a className="navbar-item">About</a>
							<a className="navbar-item">Nasa API</a>
							<a className="navbar-item">Contact</a>
							<hr className="navbar-divider" />
							<a className="navbar-item">Report an issue</a>
						</div>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-danger is-inverted">
								<span className="icon">
									<FontAwesomeIcon icon={faArrowRightFromBracket} />
								</span>
								<span>Log out</span>
							</a>
							<a className="button is-dark is-inverted">
                                <span className='icon'>
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
