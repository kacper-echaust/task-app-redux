export type Todos = SingleTodo[]


export type SingleTodo = {
	id: string
	title: string
	date: Date
	isDone: boolean
}
