import type {Todos} from "~/types/todos";

export const useTodos = async () => {
    const { data, error } = await useFetch('/api/todos')
    if (error.value)
        throw createError('Failed to fetch data')

    return { todos: data.value as Todos}
}