import React from 'react'
import { Link } from 'react-router-dom'
import NavAnchorLink from './NavAnchorLink'

const NavbarMenuStart = () => {
	return (
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
					<NavAnchorLink title="Contact" href="https://github.com/kr4chinin" />
					<hr className="navbar-divider" />
					<NavAnchorLink
						title="Report an issue"
						href="https://github.com/kr4chinin/nasa-apod-frontend"
					/>
				</div>
			</div>
		</div>
	)
}

export default React.memo(NavbarMenuStart)
