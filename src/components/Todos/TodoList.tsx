import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { SingleTodo } from './SingleTodo'

const TodoList = () => {
	const todos = useSelector((state: RootState) => state.todos)
	return (
		<ul className='flex flex-col gap-6'>
			{todos.map(todo => (
				<SingleTodo todo={todo} key={todo.id} />
			))}
		</ul>
	)
}

export { TodoList }
