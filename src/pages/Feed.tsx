import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { useQuery } from 'react-query'
import { useIntersectionObserver } from 'usehooks-ts'
import Navbar from '../components/Navbar'
import { IPost } from '../models/IPost'
import './styles/Feed.scss'
import { Oval } from 'react-loader-spinner'
import PostItem from '../components/PostItem'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
	const {
		data: feedContentChunk,
		isFetching,
		refetch
	} = useQuery(
		['feed'],
		() =>
			axios.get<any, any>('http://localhost:3000/feed', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth')}`
				}
			}),
		{
			refetchOnWindowFocus: false
		}
	)

	const [posts, setPosts] = useState<IPost[]>([])

	const lastElement = useRef() as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		if (feedContentChunk) {
			setPosts(prev => prev.concat(feedContentChunk.data))
		}
	}, [feedContentChunk])

	const entry = useIntersectionObserver(lastElement, {})
	const isVisible = !!entry?.isIntersecting

	useEffect(() => {
		if (isVisible) refetch()
	}, [isVisible, refetch])

    const navigate = useNavigate()

    function handleLogOut() {
        localStorage.removeItem('auth')
        navigate('/login')
    }

	return (
		<>
			<Navbar actionButtonTitle="Log out" actionHandler={handleLogOut} />

			<div className="feed-container">
				<div className="feed">
					{posts.length > 0 && (
						<div className="box">
							{posts.map((post, index) => {
								return <PostItem key={index} post={post} />
							})}
						</div>
					)}

					{isFetching ? (
						<div className="container is-flex is-justify-content-center mt-5">
							<Oval color="gray" secondaryColor="darkgray" height="4rem" />
						</div>
					) : null}
					<div ref={lastElement} className="last-element" />
				</div>
			</div>
		</>
	)
}

export default Feed
