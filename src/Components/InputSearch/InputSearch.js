import React from 'react'
import './InputSearch.css'
function InputSearch(props) {
	const { state = 'normal', ...rest } = props
	return (

		<input className={`input ${state}`} {...rest} type='search' />
	)
}
export default InputSearch