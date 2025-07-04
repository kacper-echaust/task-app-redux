import { useDispatch } from 'react-redux'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardAction } from '../ui/card'
import { SingleTodoType } from '@/types'
import { deleteTodo, editTodo, toggleDoneTodo } from '@/slice/todosSlice'
import { useState } from 'react'
import { EditTodo } from './EditTodo'
import { ConfirmDeleteTodo } from './ConfirmDeleteTodo'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const SingleTodo = ({ todo }: { todo: SingleTodoType }) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState<boolean>(false)
	const dispatch = useDispatch()
	const cardClass = `relative overflow-hidden w-2xl transition ${
		todo.isDone ? 'opacity-70 bg-muted/50 text-gray-500 ' : 'bg-white'
	}`
	const formattedDate = new Date(todo.date).toLocaleString('pl-PL')
	const { editStoredData, deleteStoredData } = useLocalStorage<SingleTodoType>('todos')

	const handleDone = () => {
		dispatch(toggleDoneTodo({ id: todo.id }))
		editStoredData(!todo.isDone, 'isDone', todo.id)
	}
	const handleDelete = () => {
		setIsConfirmDeleteOpen(true)
	}
	const handleCancelDelete = () => {
		setIsConfirmDeleteOpen(false)
	}
	const handleConfirmDelete = () => {
		setIsConfirmDeleteOpen(false)
		dispatch(deleteTodo(todo.id))
		deleteStoredData(todo.id)
	}
	const handleEdit = () => {
		setIsEdit(true)
	}
	const handleCancelEdit = () => {
		setIsEdit(false)
	}
	const handleConfirmEdit = (title: string) => {
		setIsEdit(false)
		dispatch(editTodo({ id: todo.id, title }))
		editStoredData(title, 'title', todo.id)
	}
	return (
		<Card className={cardClass}>
			<CardHeader>
				<CardTitle className={`text-center ${todo.isDone ? 'line-through' : ''}`}>{todo.title}</CardTitle>
			</CardHeader>
			<CardContent className='flex justify-between items-end'>
				<p className={`text-xs ${todo.isDone ? 'line-through' : 'no-underline'}`}>{formattedDate}</p>
				<CardAction className='flex gap-2'>
					<Button onClick={handleDelete} disabled={todo.isDone}>
						Delete
					</Button>
					<Button onClick={handleEdit} disabled={todo.isDone}>
						Edit
					</Button>
					<Button onClick={handleDone}>{`${todo.isDone ? 'Undo' : 'Mark as done'}`}</Button>
				</CardAction>
			</CardContent>
			{/* Edit mode */}
			{isEdit && <EditTodo prevTitle={todo.title} onCancel={handleCancelEdit} onConfirm={handleConfirmEdit} />}
			{isConfirmDeleteOpen && <ConfirmDeleteTodo onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />}
		</Card>
	)
}

export { SingleTodo }
