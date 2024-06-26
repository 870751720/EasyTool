import { useMouse, useRequest } from 'ahooks'
import { DatePicker, InputRef } from 'antd'
import axios from 'axios'
import { useState, useEffect } from 'react'
import FileSearch from './FileSearch'

function LikeButton() {
	// const [likeObj, setLikeObj] = useState({ like: 0, on: true });
	const [like, setLike] = useState(0)
	const [on, setOn] = useState(true)
	const [message, setMessage] = useState('')
	const mouse = useMouse()
	const btClick = () => {
		window.console.log('dddd')
	}
	const style = {
		width: 200,
		height: 200,
	}
	const { loading, run } = useRequest(
		() => axios.get('https://dog.ceo/api/breeds/image/random'),
		{
			manual: true,
			onSuccess: (result, _) => {
				setMessage(result.data.message)
			},
		},
	)
	useEffect(() => {
		document.title = `hello  ${like} `
		run()
	}, [like]) // 第一次渲染和每次刷新执行
	return (
		<>
			<FileSearch
				holder="dsadasdsd"
				onSearch={() => {
					window.console.log('dsadasdsdsda')
				}}
			/>
			<DatePicker />
			{loading ? (
				<p>hhh</p>
			) : (
				<img src={message} alt="dog" style={style} />
			)}
			<button
				type="button"
				onClick={() => {
					setLike(like + 1)
				}}
			>
				{like}
			</button>
			<button
				type="button"
				onClick={() => {
					setOn(!on)
					btClick()
				}}
			>
				{on ? 'on' : 'off'}
			</button>
			<p>
				{mouse.clientX} {mouse.clientY}
			</p>
		</>
	)
}

export default LikeButton
