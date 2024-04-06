export const getUsers = async () => {
    const { data, error } = await useFetch('/api/users')
    if (error.value)
        throw createError('Failed to fetch data')

    return { users: data.value}
}

export const getUser = async (id: number) => {
    const { data, error } = await useFetch(`/api/users/${id}`)
    if (error.value)
        throw createError('Failed to fetch data')

    return { user: data.value }
}

export const useUsers = () => {
    return {
        getUsers,
        getUser
    }
}