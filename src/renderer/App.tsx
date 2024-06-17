import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import LikeButton from './components/LikeButton'

function Root() {
	return (
		<div>
			<LikeButton />
		</div>
	)
}

export default function App() {
	return (
		<ConfigProvider locale={zhCN}>
			<Router>
				<Routes>
					<Route path="/" element={<Root />} />
				</Routes>
			</Router>
		</ConfigProvider>
	)
}
