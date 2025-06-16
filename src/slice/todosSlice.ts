import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SingleTodo, Todos } from '../types'

const initialState: Todos = []

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<SingleTodo>) => {
			if(!action.payload){
				throw new Error('Todo cannot be empty')
			}
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
			}else {
				throw new Error('Todo not found')
			}
		},
		toggleDoneTodo: (state, action: PayloadAction<{ id: string }>) => {
			const completedTodo = state.find(todo => todo.id === action.payload.id)
			if (completedTodo) {
				completedTodo.isDone = !completedTodo.isDone
			}
		},
	},
})

export const { addTodo, deleteTodo, editTodo, toggleDoneTodo } = todosSlice.actions

export default todosSlice.reducer
