import axios from "axios"
import { useQuery } from "react-query"

const Feed = () => {

    const {data: feedContent, isLoading} = useQuery(['feed'], () =>
        axios.get('http://localhost:3000/feed', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth')}`
            }
        })
    )

    return (
        <div className="box content">
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <pre>{JSON.stringify(feedContent?.data, null, 2)}</pre>
            )}
        </div>
    )
}

export default Feed