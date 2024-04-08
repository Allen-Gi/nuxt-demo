export const interceptors = {
    onRequest: ({ request, options }) => {},
    onResponse: ({ request, options, response }) => {},
    onRequestError: ({ request, options, error }) => {
        console.log(111);
    },
    onResponseError: ({ request, options, response }) => {
    },
}