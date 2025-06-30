import { Button } from '../ui/button'
import { CardAction, CardContent, CardHeader, CardTitle } from '../ui/card'

type ConfirmDeleteTodoProps = {
	onConfirm: () => void
	onCancel: () => void
}

const ConfirmDeleteTodo = ({ onConfirm, onCancel }: ConfirmDeleteTodoProps) => {
	return (
		<CardContent className='absolute w-full h-full bg-white px-10'>
			<CardHeader>
				<CardTitle className='text-red-500 text-center'>Are you sure to delete this todo?</CardTitle>
			</CardHeader>
			<CardAction className='flex gap-2'>
				<Button onClick={onConfirm}>Confirm</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</CardAction>
		</CardContent>
	)
}

export { ConfirmDeleteTodo }
