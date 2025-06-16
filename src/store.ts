import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../src/slice/todosSlice'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
})
