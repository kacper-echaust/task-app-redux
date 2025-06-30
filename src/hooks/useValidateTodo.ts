const useValidateTodo = () => {
    const validateTodo = (text: string) => {
            const trimmedValue = text.trim()
            if (!trimmedValue) return 'Todo can not be empty'
            if (trimmedValue.length > 50) return 'Todo can not be longer than 50 characters'
            return ''
        }

        return{
            validateTodo
        }
}
export {useValidateTodo}