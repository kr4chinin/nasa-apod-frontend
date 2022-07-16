import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './styles/About.scss'

const About = () => {
	const navigate = useNavigate()

	function handleLogOut() {
		localStorage.removeItem('auth')
		navigate('/login')
	}

	return (
		<>
			<Navbar actionButtonTitle="👋🏼 Log out" actionHandler={handleLogOut} />
			<div className="about-container">
				<div className="box content">
					<p className="title">Information header</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex
						deserunt ipsa vero, eaque voluptatum molestiae praesentium maiores
						maxime asperiores obcaecati aperiam harum aut consequuntur atque
						quod? Ad, facilis! Amet optio nam soluta perferendis ut dignissimos
						pariatur natus excepturi voluptatem dicta, tempora ad similique
						nihil cupiditate! Vero id ducimus magnam. Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. Cum dignissimos qui omnis.
						Deleniti, nobis enim ex quos similique at vitae magnam quam veniam.
						Rerum velit harum at officia laborum numquam.
					</p>
				</div>
			</div>
		</>
	)
}

export default About
