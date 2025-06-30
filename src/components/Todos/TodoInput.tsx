import { ChangeEvent } from 'react'
import { Input } from '../ui/input'
import { Error } from './Error'

type TodoInputProps = {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder: string
	error: string
}

const TodoInput = ({ value, onChange, placeholder, error }: TodoInputProps) => {
	return (
		<>
			<Input
				className={`relative mb-6 ${error ? 'border-red-500 focus:ring-red-400' : ''}`}
				type='text'
				name='title'
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && <Error text={error} />}
		</>
	)
}

export { TodoInput }
