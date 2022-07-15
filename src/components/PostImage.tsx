import { FC, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import './styles/PostItem.scss'

interface PostImageProps {
	alt: string
	src: string
}

const PostImage: FC<PostImageProps> = ({ alt, src }) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false)

	return (
		<>
			<img
				className={`image smooth-image is-128x128 image-${
					isImageLoaded ? 'visible' : 'hidden'
				}`}
				onLoad={() => setIsImageLoaded(true)}
				alt={alt}
				src={src}
			/>
			{!isImageLoaded && <Grid color="gray" width={128} height={128} />}
		</>
	)
}

export default PostImage
