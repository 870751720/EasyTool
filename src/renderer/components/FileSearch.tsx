import { Input, InputRef } from 'antd'
import { LegacyRef } from 'react'

const { Search } = Input

interface FileSearchProps {
	holder: string
	onSearch: (value: string) => void
}

function FileSearch({ holder, onSearch }: FileSearchProps) {
	return (
		<div>
			<Search
				placeholder={holder}
				onSearch={onSearch}
				style={{ width: 200 }}
				allowClear
			/>
		</div>
	)
}

export default FileSearch
