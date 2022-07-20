import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { useQuery } from 'react-query'
import { useIntersectionObserver } from 'usehooks-ts'
import Navbar from '../components/navbar/Navbar'
import { IPost } from '../models/IPost'
import './styles/Feed.scss'
import { Oval } from 'react-loader-spinner'
import PostItem from '../components/post/PostItem'
import ErrorMessage from '../components/ErrorMessage'
import { ErrorResponse } from '../types/ErrorResponse'
import { useLogout } from '../hooks/useLogout'

const Feed = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const lastElement = useRef() as React.MutableRefObject<HTMLDivElement>

	const entry = useIntersectionObserver(lastElement, {})
	const isVisible = !!entry?.isIntersecting

	const {
		data: feedContentChunk,
		isFetching,
		refetch,
		error
	} = useQuery<{ data: IPost[] }, ErrorResponse>(
		['feed'],
		() =>
			axios.get('https://nasa-apod-project-backend.herokuapp.com/feed', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth')}`
				}
			}),
		{
			refetchOnWindowFocus: false
		}
	)

	useEffect(() => {
		if (feedContentChunk) {
			setPosts(prev => prev.concat(feedContentChunk.data))
		}
	}, [feedContentChunk])

	useEffect(() => {
		if (isVisible) refetch()
	}, [isVisible, refetch])

	const logout = useLogout()

	return (
		<>
			<Navbar actionButtonTitle="👋🏼 Log out" actionHandler={logout} />

			<div className="feed-container">
				<div className="feed">
					{posts.length > 0 && (
						<div className="box">
							{posts.map((post, index) => {
								return (
									<PostItem key={index} post={post} isInFavourites={false} />
								)
							})}
						</div>
					)}

					{isFetching ? (
						<div className="container is-flex is-justify-content-center mt-5">
							<Oval color="gray" secondaryColor="darkgray" height="4rem" />
						</div>
					) : null}
					<div ref={lastElement} className="last-element" />

					{!isFetching && (
						<ErrorMessage
							errorTitle={
								error ? error?.response.data.message : 'Something went wrong'
							}
							errorBody={
								<p>
									You are not authorized or your authorization token has
									expired. Please <b>log out</b> (via navbar) and you will be
									able to log in again or create a new account!
								</p>
							}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default Feed
