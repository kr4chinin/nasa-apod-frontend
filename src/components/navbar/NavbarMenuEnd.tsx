import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from 'react-query'
import axios from 'axios'
import { FC } from 'react'
import React from 'react'

interface NavbarMenuEndProps {
	isBurgerActive: boolean
	actionHandler: () => void
	actionButtonTitle: string
}

const NavbarMenuEnd: FC<NavbarMenuEndProps> = ({
	actionButtonTitle,
	actionHandler,
	isBurgerActive
}) => {
	const {
		data: username,
		isError,
		isFetching
	} = useQuery(['username'], () =>
		axios.get('http://localhost:3000/username', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('auth')}`
			}
		})
	)

	return (
		<div className="navbar-end">
			<p className={`navbar-item ${isBurgerActive && 'ml-2'}`}>
				{isError || isFetching ? 'Not authorized' : `👤 ${username?.data}`}
			</p>
			<div className="navbar-item">
				<div className="buttons">
					<p
						className={`button is-danger ${!isBurgerActive && 'is-inverted'}`}
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
	)
}

export default React.memo(NavbarMenuEnd)
