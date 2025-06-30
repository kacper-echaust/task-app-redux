import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../src/slice/todosSlice'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
})
export type RootState = ReturnType<typeof store.getState>