import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { addTodo } from '@/slice/todosSlice'
import { TodoInput } from './TodoInput'
import { useValidateTodo } from '@/hooks/useValidateTodo'

const TodoForm = () => {
	const [value, setValue] = useState<string>('')
	const [error, setError] = useState<string>('')
	const { validateTodo } = useValidateTodo()
	const dispatch = useDispatch()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		if (error) setError('')
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const newId = crypto.randomUUID()
		const errorMsg = validateTodo(value)

		if (errorMsg) {
			setError(errorMsg)
			return
		}

		const todoToAdd = { title: value, isDone: false, date: Date.now(), id: newId.toString() }
		const storedTodos = localStorage.getItem('todos')
		const todos = storedTodos ? JSON.parse(storedTodos) : []

		const updatedTodos = [...todos, todoToAdd]

		localStorage.setItem('todos', JSON.stringify(updatedTodos))

		dispatch(addTodo(todoToAdd))
		setValue('')
		setError('')
	}

	return (
		<form onSubmit={handleSubmit} className='w-lg flex p-3 gap-2'>
			<TodoInput value={value} onChange={handleChange} placeholder='Add some todo' error={error} />
			<Button type='submit' disabled={!value.trim()}>
				Add todo
			</Button>
		</form>
	)
}

export { TodoForm }
