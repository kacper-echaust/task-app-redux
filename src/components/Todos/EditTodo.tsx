import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CardContent, CardHeader, CardAction } from '../ui/card'
import { useState } from 'react'

type EditTodoProps = {
	prevTitle: string
	onCancel: () => void
	onConfirm: (title: string) => void
}

const EditTodo = ({ prevTitle, onCancel, onConfirm }: EditTodoProps) => {
	const [editValue, setEditValue] = useState<string>(prevTitle)

	return (
		<CardContent className='absolute z-10 bg-white w-full h-full px-6'>
			<CardHeader className='w-full'>
				<Input value={editValue} onChange={e => setEditValue(e.target.value)} />
			</CardHeader>
			<CardAction className='flex gap-2'>
				<Button onClick={() => onConfirm(editValue)}>Confirm</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</CardAction>
		</CardContent>
	)
}

export { EditTodo }
