import { FC, useState } from 'react'
import { IPost } from '../../models/IPost'
import PostImage from './PostImage'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/PostItem.scss'
import { useMutation } from 'react-query'
import axios from 'axios'
import React from 'react'
import { HOST } from '../../utils/host'

interface PostItemProps {
	post: IPost
	isInFavourites: boolean
}

type PostDate = {
	postDate: string
}

const PostItem: FC<PostItemProps> = ({ post, isInFavourites }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isFavourite, setIsFavourite] = useState(isInFavourites)

	const { mutate: addToFavoutites } = useMutation(({ postDate }: PostDate) =>
		axios.put(
			`${HOST}/add-favourite`,
			{ postDate },
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('apod-auth')}`
				}
			}
		)
	)

	const { mutate: removeFromFavourites } = useMutation(
		({ postDate }: PostDate) =>
			axios.put(
				`${HOST}/remove-favourite`,
				{ postDate },
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('apod-auth')}`
					}
				}
			)
	)

	function handleAddFavourite() {
		addToFavoutites({ postDate: post.date })
		setIsFavourite(true)
	}

	function handleRemoveFavourite() {
		removeFromFavourites({ postDate: post.date })
		setIsFavourite(false)
	}

	function toggleExpand() {
		setIsExpanded(prev => !prev)
	}

	const isPostEmpty = post.explanation.length === 0

	if (post.media_type !== 'image') {
		return null
	}

	return (
		<article className="media m-3">
			<figure className="media-left">
				<PostImage src={post.url} alt={post.title} />
			</figure>
			<div className="media-content">
				<div className="content">
					<div>
						<strong>{post.title}</strong> <small>{post.date}</small>
						<br />
						{isExpanded
							? post.explanation
							: post.explanation.slice(0, 300) +
							  `${post.explanation.length > 301 ? '...' : ''}`}
						{!isPostEmpty && post.explanation.length > 300 && (
							<p className="expand-trigger" onClick={toggleExpand}>
								{isExpanded ? 'Show less' : 'Show more'}
							</p>
						)}
						{isPostEmpty && 'This post is empty! 😓'}
					</div>
				</div>
			</div>
			<div className="media-right">
				<span
					className={`icon ${
						isFavourite ? 'remove-favourite' : 'add-favourite'
					}`}
					onClick={isFavourite ? handleRemoveFavourite : handleAddFavourite}
				>
					<FontAwesomeIcon icon={faStar} />
				</span>
			</div>
		</article>
	)
}

export default React.memo(PostItem)
