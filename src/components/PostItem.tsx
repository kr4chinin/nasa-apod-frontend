import { FC, useState } from 'react'
import { IPost } from '../models/IPost'
import PostImage from './PostImage'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/PostItem.scss'
import { useMutation } from 'react-query'
import axios from 'axios'

interface PostItemProps {
	post: IPost
}

interface PostDate {
	postDate: string
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isFavourite, setIsFavourite] = useState(false)

	function toggleExpand() {
		setIsExpanded(prev => !prev)
	}

	const { mutate: addToFavoutites } = useMutation(({ postDate }: PostDate) =>
		axios.put(
			'http://localhost:3000/add-favourite',
			{ postDate },
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth')}`
				}
			}
		)
	)

	const { mutate: removeFromFavourites } = useMutation(
		({ postDate }: PostDate) =>
			axios.put(
				'http://localhost:3000/remove-favourite',
				{ postDate },
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('auth')}`
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
							: post.explanation.slice(0, 300) + '...'}
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

export default PostItem
