import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CardContent, CardHeader, CardAction } from '../ui/card'
import { useState } from 'react'
import { Error } from './Error'

type EditTodoProps = {
	prevTitle: string
	onCancel: () => void
	onConfirm: (title: string) => void
}

const EditTodo = ({ prevTitle, onCancel, onConfirm }: EditTodoProps) => {
	const [editValue, setEditValue] = useState<string>(prevTitle)
	const [error, setError] = useState<string>('')
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

	const handleConfirm = () => {
		const trimmedValue = editValue.trim()
		if (prevTitle === trimmedValue) {
			setError('Todo have the same value')
			return
		}
		if (!trimmedValue) {
			setError('Todo can not be empty')
			return
		}
		if (trimmedValue.length > 50) {
			setError('Todo can not be longer than 50 characters')
			return
		}
		setError('')
		setIsSubmitting(true)
		onConfirm(editValue)
	}

	return (
		<CardContent className='absolute z-10 bg-white w-full h-full px-6'>
			<CardHeader className='w-full'>
				<Input
					className={`${error ? 'border-red-500 focus:ring-red-400' : ''}`}
					value={editValue}
					onChange={e => setEditValue(e.target.value)}
				/>
				{error && <Error text={error} />}
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
