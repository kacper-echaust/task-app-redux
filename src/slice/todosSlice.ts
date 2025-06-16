import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SingleTodo, Todos } from '../types'

const initialState: Todos = []

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<SingleTodo>) => {
			state.push(action.payload)
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			return state.filter(todo => todo.id !== action.payload)
		},
		editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
			const { title, id } = action.payload
			const todoToEdit = state.find(todo => todo.id === id)
			if (todoToEdit) {
				todoToEdit.title = title
			}
		},
	},
})

export const { addTodo, deleteTodo,editTodo } = todosSlice.actions

export default todosSlice.reducer
