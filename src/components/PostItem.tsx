import { FC } from 'react'
import { IPost } from '../models/IPost'
import PostImage from './PostImage'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/PostItem.scss'

interface PostItemProps {
	post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
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
					<p>
						<strong>{post.title}</strong> <small>{post.date}</small>
						<br />
						{post.explanation.length > 0 ? post.explanation : 'Post is empty!'}
					</p>
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
