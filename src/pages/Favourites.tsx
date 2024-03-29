import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import ErrorMessage from '../components/ErrorMessage'
import Navbar from '../components/navbar/Navbar'
import PostItem from '../components/post/PostItem'
import { useLogout } from '../hooks/useLogout'
import { IPost } from '../models/IPost'
import { ErrorResponse } from '../types/ErrorResponse'
import { HOST } from '../utils/host'
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
			axios.get(`${HOST}/favourites`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('apod-auth')}`
				}
			}),
		{
			refetchOnWindowFocus: true,
			refetchInterval: 5000
		}
	)

	const logout = useLogout()

	return (
		<>
			<Navbar actionButtonTitle="👋🏼 Log out" actionHandler={logout} />

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
