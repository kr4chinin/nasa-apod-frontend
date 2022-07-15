import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<AppRoutes />
			</HashRouter>
		</QueryClientProvider>
	)
}

export default App
