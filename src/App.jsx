import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import AddTodoForm from './components/add-todo-form/AddTodoForm'
import TodoList from './components/todo-list/TodoList'
import TotalCompleteItems from './components/total-complete-items/TotalCompleteItems'

const App = () => {
	return (
		<div className='container p-3 mt-5'>
			<h1>To Do List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	)
}

export default App
