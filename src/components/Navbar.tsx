import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCodeFork,
	faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'

interface NavbarProps {
    buttonTitle: string
}

const Navbar: FC<NavbarProps> = ({buttonTitle}) => {
	return (
		<nav className="navbar is-link is-spaced has-shadow is-fixed-top">
			<div className="navbar-brand">
				<p className="navbar-item">
					Astronomica 🪐
				</p>

				<p
					role="button"
					className="navbar-burger"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</p>
			</div>

			<div className="navbar-menu">
				<div className="navbar-start">
					<p className="navbar-item">Home</p>
					<p className="navbar-item">Favourites</p>
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
							<p className="button is-danger is-inverted">
								<span className="icon">
									<FontAwesomeIcon icon={faArrowRightFromBracket} />
								</span>
								<span>{buttonTitle}</span>
							</p>
							<p className="button is-dark is-inverted">
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faCodeFork} />
                                </span>
                                <span>Github</span>
                            </p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
