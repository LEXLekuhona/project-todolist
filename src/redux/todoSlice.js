import { createSlice, current, nanoid } from '@reduxjs/toolkit'

const initialState = {
	todos: JSON.parse(localStorage.getItem('todos'))
		? JSON.parse(localStorage.getItem('todos'))
		: [
				{
					id: nanoid(),
					title: 'Тестовое задание',
					isCompleted: false,
				},
				{
					id: nanoid(),
					title: 'Покрытие тестами',
					isCompleted: true,
				},
		  ],
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: nanoid(),
				title: action.payload.title,
				isCompleted: false,
			})
			localStorage.setItem('todos', JSON.stringify(current(state.todos)))
		},

		deleteTodo: (state, action) => {
			const date = state.todos.filter(todo => {
				return todo.id !== action.payload.id
			})
			state.todos = date
			localStorage.removeItem('todos')
		},

		toggleComplete: (state, action) => {
			const index = state.todos.findIndex(todo => todo.id === action.payload.id)
			state.todos[index].isCompleted = action.payload.isCompleted
		},

		Completed: (state, action) => {
			const date = state.todos.filter(
				todo => todo.isCompleted === action.payload
			)
			state.todos = date
		},
	},
})

export const {
	addTodo,
	deleteTodo,
	toggleComplete,
	filterTodo,
	changeFilter,
	Completed,
} = todoSlice.actions

export default todoSlice.reducer
