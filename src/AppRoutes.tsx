import { Navigate, Route, Routes } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Registration from './pages/Registration'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/registration" element={<Registration />} />
			<Route path="/feed" element={<Feed />} />
            <Route path='/favourites' element={<Favourites />} />
			<Route path="/" element={<Navigate to="/login" replace />} />
		</Routes>
	)
}

export default AppRoutes
