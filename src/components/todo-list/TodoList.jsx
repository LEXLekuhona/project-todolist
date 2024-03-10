import { useSelector } from 'react-redux'

import TodoItem from '../todo-item/TodoItem'

const TodoList = () => {
	const todos = useSelector(state => state.todos.todos)

	return (
		<ul className='list-group'>
			{todos.length === 0 ? (
				<h2>Add ToDo...</h2>
			) : (
				todos.map(todo => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						title={todo.title}
						isCompleted={todo.isCompleted}
					/>
				))
			)}
		</ul>
	)
}
export default TodoList
