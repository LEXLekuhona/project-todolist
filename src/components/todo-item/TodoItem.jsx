import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../../redux/todoSlice'

const TodoItem = ({ id, title, isCompleted }) => {
	const dispath = useDispatch()

	const handlerDelete = () => {
		dispath(deleteTodo({ id: id }))
	}

	const handlerCompleted = () => {
		dispath(toggleComplete({ id: id, isCompleted: !isCompleted }))
	}

	return (
		<li
			className={`list-group-item ${
				isCompleted && 'list-group-item-danger text-decoration-line-through'
			}`}
		>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='me-3'
						checked={isCompleted}
						onChange={handlerCompleted}
					/>
					{title}
				</span>
				<div>
					<button className='btn btn-warning me-3'>
						Edit
					</button>
					<button onClick={handlerDelete} className='btn btn-danger'>
						Delete
					</button>
				</div>
			</div>
		</li>
	)
}
export default TodoItem
