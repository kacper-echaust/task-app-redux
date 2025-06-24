import { Input } from '@/components/ui/input'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { addTodo } from '@/slice/todosSlice'

const TodoForm = () => {
	const [value, setValue] = useState<string>('')
	const dispatch = useDispatch()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const newId = crypto.randomUUID()
		dispatch(addTodo({ title: value, isDone: false, date: Date.now(), id: newId.toString() }))
		setValue('')
	}

	return (
		<form onSubmit={handleSubmit} className='w-lg flex p-3 gap-2'>
			<Input type='text' name='title' value={value} onChange={handleChange} placeholder='Add some todo' />
			<Button type='submit'>Add todo</Button>
		</form>
	)
}

export { TodoForm }
