import { TodoForm } from './components/Todos/TodoForm'
import { TodoList } from './components/Todos/TodoList'

const App = () => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<TodoForm />
			<TodoList />
		</div>
	)
}

export { App }
