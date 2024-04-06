import { $fetch } from 'ofetch';
import {configureSWRHeaders} from "~/server/utils/swr.ts";

export let users;

async function fetchUsers() {
    users = await $fetch('https://jsonplaceholder.typicode.com/users');
    return users
}

export default defineEventHandler(async (event) => {
    configureSWRHeaders(event);

    if (users) {
        return {
            ...users
        }
    }

    users = await fetchUsers();
    return {
        ...users
    }
})