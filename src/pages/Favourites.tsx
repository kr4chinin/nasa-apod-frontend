import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem'
import { IPost } from '../models/IPost'
import { ErrorResponse } from '../types/ErrorResponse'
import './styles/Feed.scss'

const Favourites = () => {
	const {
		data: favourites,
		isFetching,
		isError,
		error
	} = useQuery<{ data: IPost[] }, ErrorResponse>(
		['favourites'],
		() =>
			axios.get('http://localhost:3000/favourites', {
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
					{favourites && favourites?.data.length > 0 ? (
						<div className="box">
							{favourites.data.map((fav: any, index: any) => {
								return <PostItem key={index} post={fav} isInFavourites={true} />
							})}
						</div>
					) : (
						<article className="message is-info is-medium">
							<div className="message-header">
								<p>Section is empty ℹ️</p>
							</div>
							<div className="message-body">
								{!error
									? "You haven't marked any posts as favourite yet! When you see something remarkable, you can mark it by pressing star icon in the right top corner of the post and it will be saved there."
									: 'Error occured!'}
							</div>
						</article>
					)}

					{isFetching ? (
						<div className="container is-flex is-justify-content-center mt-5">
							<Oval color="gray" secondaryColor="darkgray" height="4rem" />
						</div>
					) : null}

					{!isFetching && isError && (
						<ErrorMessage
							errorTitle={error?.response.data.message}
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

export default Favourites
