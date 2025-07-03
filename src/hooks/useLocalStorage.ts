const useLocalStorage = <T extends { id: string }>(key: string) => {
	const getStoredData = (): T[] => {
		const data = localStorage.getItem(key)
		return data ? (JSON.parse(data) as T[]) : []
	}

	const addStoredData = (dataToAdd: T) => {
		const data = getStoredData()
		localStorage.setItem(key, JSON.stringify([...data, dataToAdd]))
	}
	const editStoredData = (value: unknown, field: keyof T, id: string) => {
		const data = getStoredData()
		const editedData = data.map(item => (item.id === id ? { ...item, [field]: value } : item))

		localStorage.setItem(key, JSON.stringify(editedData))
	}
	const deleteStoredData = (id: string) => {
		const data = getStoredData()
		const filteredData = data.filter(item => item.id !== id)
		localStorage.setItem(key, JSON.stringify(filteredData))
	}
	return {
		getStoredData,
		addStoredData,
		editStoredData,
		deleteStoredData,
	}
}
export { useLocalStorage }
