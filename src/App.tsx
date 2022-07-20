import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import MobileModal from './components/MobileModal'
import { detectMobile } from './helpers/detectMobile'

const queryClient = new QueryClient()

function App() {
	const isMobile = detectMobile()
	const [isOpen, setIsOpen] = useState(isMobile)

	return (
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<MobileModal isOpen={isOpen} setIsOpen={setIsOpen}></MobileModal>
				<AppRoutes />
			</HashRouter>
		</QueryClientProvider>
	)
}

export default App
