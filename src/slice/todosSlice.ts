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
	},
})

export const { addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
