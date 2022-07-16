import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem'
import './styles/Feed.scss'

const Favourites = () => {
	const { data: favourites, isFetching } = useQuery(
		['favourites'],
		() =>
			axios.get<any, any>('http://localhost:3000/favourites', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth')}`
				}
			}),
		{
			refetchOnWindowFocus: true
		}
	)

	const navigate = useNavigate()

	function handleLogOut() {
		localStorage.removeItem('auth')
		navigate('/login')
	}

	return (
		<>
			<Navbar actionButtonTitle="👋🏼 Log out" actionHandler={handleLogOut} />

			<div className="feed-container">
				<div className="feed">
					{favourites?.data.length > 0 ? (
						<div className="box">
							{favourites.data.map((fav: any, index: any) => {
								return <PostItem key={index} post={fav} isInFavourites={true}/>
							})}
						</div>
					) : (
						<article className="message is-info is-medium">
							<div className="message-header">
								<p>Section is empty ℹ️</p>
							</div>
							<div className="message-body">
								You haven't marked any posts as favourite yet! When you see
								something remarkable, you can mark it by pressing star icon in
								the right top corner of the post and it will be saved there.
							</div>
						</article>
					)}
					{isFetching ? (
						<div className="container is-flex is-justify-content-center mt-5">
							<Oval color="gray" secondaryColor="darkgray" height="4rem" />
						</div>
					) : null}
				</div>
			</div>
		</>
	)
}

export default Favourites
