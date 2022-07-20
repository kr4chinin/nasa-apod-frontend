import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { useLogout } from '../hooks/useLogout'
import './styles/About.scss'

const About = () => {
	const logout = useLogout()

	return (
		<>
			<Navbar actionButtonTitle="👋🏼 Log out" actionHandler={logout} />
			<div className="about-container">
				<div className="box content">
					<p className="title">Information about project</p>

					<p className="title is-4">Data sources</p>
					<article className="message is-medium">
						<div className="message-body">
							Feed data fetched randomly from{' '}
							<a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">
								Nasa Open API
							</a>{' '}
							and presented in format of <b>infinite feed</b>. When you scroll
							down to the end of the chunk (1 chunk - 10 posts) - another chunk
							will be loaded automatically. <b>APOD</b> stands for Astronomy
							Picture Of the Day.
						</div>
					</article>

					<p className="title is-4">Functionality</p>
					<article className="message is-medium">
						<div className="message-body">
							This application has:
							<ul>
								<li>
									<b>JWT</b> authorization (backend is also a part of this
									project, server is hosted on{' '}
									<a
										href="https://dashboard.heroku.com/apps"
										target="_blank"
										rel="noreferrer"
									>
										Heroku
									</a>
									, here you can find server{' '}
									<a
										href="https://nasa-apod-project-backend.herokuapp.com"
										target="_blank"
										rel="noreferrer"
									>
										link
									</a>{' '}
									and GitHub repo{' '}
									<a
										href="https://github.com/kr4chinin/nasa-apod-backend"
										target="_blank"
										rel="noreferrer"
									>
										link
									</a>
								</li>
								<li>Infinite feed</li>
								<li>
									Responsive layout and <b>hamburger</b> menu for mobile devices
								</li>
								<li>
									<Link to="/favourites">Favourites section</Link> where you can
									save posts which you've liked. Their identificators are stored
									in the DB so they will be automatically refetched even if you
									will close this page and come back later
								</li>
								<li>
									<b>Show more</b> / <b>show less</b> buttons for long posts
								</li>
							</ul>
						</div>
					</article>

					<p className="title is-4">Tech stack</p>
					<article className="message is-medium">
						<div className="message-body">
							In this project I've used following <b>technologies</b>:
							<ul>
								<li>React + Typescript</li>
								<li>ReactQuery (useQuery, useMutation)</li>
								<li>Usehooks TS (useIntersectionObserver)</li>
								<li>Bulma + SCSS for interface and layout</li>
								<li>Axios</li>
							</ul>
						</div>
					</article>

					<p className="title is-4">Conclusion</p>
					<article className="message is-medium">
						<div className="message-body">
							For more information check <b>README</b> files in my GitHub repos:
							<ol>
								<li>
									Frontend -{' '}
									<a
										href="https://github.com/kr4chinin/nasa-apod-frontend"
										target="_blank"
										rel="noreferrer"
									>
										nasa-apod-frontend
									</a>
								</li>
								<li>
									Backend -{' '}
									<a
										href="https://github.com/kr4chinin/nasa-apod-backend"
										target="_blank"
										rel="noreferrer"
									>
										nasa-apod-backend
									</a>
								</li>
							</ol>
						</div>
					</article>
				</div>
			</div>
		</>
	)
}

export default React.memo(About) 
