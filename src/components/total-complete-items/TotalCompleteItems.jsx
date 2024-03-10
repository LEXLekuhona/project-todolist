import { useDispatch, useSelector } from 'react-redux'
import { Completed } from '../../redux/todoSlice'

const TotalCompleteItems = () => {
	const completedTodo = useSelector(state =>
		state.todos.todos.filter(todo => todo.isCompleted === true)
	)
	const dispatch = useDispatch()

	const handleMark = value => {
		dispatch(Completed(value))
	}
	return (
		<>
			<h5 className='mt-3'>Total Completed todo: {completedTodo.length}</h5>

			<button className='btn btn-success me-3' onClick={() => handleMark(true)}>
				Completed
			</button>
			<button className='btn btn-success ' onClick={() => handleMark(false)}>
				Not Completed
			</button>
		</>
	)
}
export default TotalCompleteItems
