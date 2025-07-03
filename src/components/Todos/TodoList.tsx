import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { SingleTodo } from './SingleTodo'
import { useEffect } from 'react'
import { initTodos } from '@/slice/todosSlice'

const TodoList = () => {
	const todos = useSelector((state: RootState) => state.todos)
	const dispatch = useDispatch()

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos')
		if (savedTodos) {
			dispatch(initTodos(JSON.parse(savedTodos)))
		}
	}, [dispatch])

	return (
		<ul className='flex flex-col gap-6'>
			{todos.map(todo => (
				<SingleTodo todo={todo} key={todo.id} />
			))}
		</ul>
	)
}

export { TodoList }
