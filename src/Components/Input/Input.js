import React from 'react'
import './Input.css'
function Input(props) {
	const { state = 'normal', ...rest } = props
	return (
		<input className={`input ${state}`} {...rest}/>
	)
}
export default Input