import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarMenuStart from './NavbarMenuStart'
import NavbarMenuEnd from './NavbarMenuEnd'

interface NavbarProps {
	actionButtonTitle: string
	actionHandler: () => void
}

const Navbar: FC<NavbarProps> = ({ actionButtonTitle, actionHandler }) => {
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
				<NavbarMenuStart />
				<NavbarMenuEnd
					actionButtonTitle={actionButtonTitle}
					actionHandler={actionHandler}
					isBurgerActive={isBurgerActive}
				/>
			</div>
		</nav>
	)
}

export default Navbar
