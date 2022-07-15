import { FC, useState } from 'react'
import { IPost } from '../models/IPost'
import PostImage from './PostImage'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/PostItem.scss'

interface PostItemProps {
	post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	function toggleExpand() {
		setIsExpanded(prev => !prev)
	}

	const isPostEmpty = post.explanation.length === 0

	if (post.media_type !== 'image') {
		return null
	}

	return (
		<article className="media">
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
				<span className="icon">
					<FontAwesomeIcon icon={faStar} />
				</span>
			</div>
		</article>
	)
}

export default PostItem
