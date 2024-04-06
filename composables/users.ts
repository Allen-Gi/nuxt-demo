export const getUsers = async () => {
    const { data, error } = await useFetch('/api/users')
    if (error.value)
        throw createError('Failed to fetch data')

    return { users: data.value}
}

export const getUser = async (userId: number) => {
    const { data, error } = await useFetch(`/api/users/${userId}`)
    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: `Couldn't fetch product id ${userId}.`,
        })
    }

    return { user: data.value }
}

export const useUsers = () => {
    return {
        getUsers,
        getUser
    }
}