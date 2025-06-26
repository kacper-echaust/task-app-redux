export type Todos = SingleTodoType[]

export type SingleTodoType = {
	id: string
	title: string
	date: number
	isDone: boolean
}
