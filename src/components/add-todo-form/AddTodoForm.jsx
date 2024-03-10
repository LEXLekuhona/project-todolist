import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todoSlice'

const AddTodoForm = () => {
	const [value, setValue] = useState('')
	const dispath = useDispatch()

	const handlerSubmit = e => {
		e.preventDefault()
		if (value) {
			dispath(
				addTodo({
					title: value,
				})
			)
			setValue('')
		} else {
			alert('Enter the task!!!')
		}
	}

	return (
		<form onSubmit={handlerSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'></label>
			<input
				type='text'
				placeholder='What needs to be done?'
				className='form-control mb-2 mr-sm-2'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button className='btn btn-warning mb-2' type='submit'>
				Add ToDo
			</button>
		</form>
	)
}
export default AddTodoForm
