import { $fetch } from 'ofetch';
import {configureSWRHeaders} from "~/server/utils/swr.ts";

export let user;

async function fetchUser(id: number) {
    user = await $fetch('https://jsonplaceholder.typicode.com/users/' + id);
    console.log(user);
    return user
}

export default defineEventHandler(async (event) => {
    configureSWRHeaders(event);

    user = await fetchUser(event.context.params.id);
    return {
        ...user
    }
})