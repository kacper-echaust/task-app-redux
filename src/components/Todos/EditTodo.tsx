import { Button } from '../ui/button'
import { CardContent, CardHeader, CardAction } from '../ui/card'
import { useState } from 'react'
import { TodoInput } from './TodoInput'
import { useValidateTodo } from '@/hooks/useValidateTodo'

type EditTodoProps = {
	prevTitle: string
	onCancel: () => void
	onConfirm: (title: string) => void
}

const EditTodo = ({ prevTitle, onCancel, onConfirm }: EditTodoProps) => {
	const [editValue, setEditValue] = useState<string>(prevTitle)
	const [error, setError] = useState<string>('')
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
	const { validateTodo } = useValidateTodo()

	const handleConfirm = () => {
		const trimmedValue = editValue.trim()
		const errorMsg = validateTodo(trimmedValue)
		if (errorMsg) {
			setError(errorMsg)
			return
		}
		if (prevTitle === trimmedValue) {
			setError('Todo have the same value')
			return
		}
		setError('')
		setIsSubmitting(true)
		onConfirm(trimmedValue)
	}

	return (
		<CardContent className='absolute z-10 bg-white w-full h-full px-6'>
			<CardHeader className='w-full'>
				<TodoInput
					error={error}
					value={editValue}
					onChange={e => setEditValue(e.target.value)}
					placeholder='Rename todo'
				/>
			</CardHeader>
			<CardAction className='flex gap-2'>
				<Button onClick={handleConfirm} disabled={isSubmitting}>
					Confirm
				</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</CardAction>
		</CardContent>
	)
}

export { EditTodo }
