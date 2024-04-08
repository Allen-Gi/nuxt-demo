import { $fetch } from 'ofetch';
import {configureSWRHeaders} from "~/server/utils/swr.js";

async function fetchCalendar() {
    const todos = await $fetch('https://jsonplaceholder.typicode.com/todos/1');
    return todos
}
export default defineEventHandler(async (event) => {
    configureSWRHeaders(event);
    const todos = await fetchCalendar();
    return {
        todos
    }
})