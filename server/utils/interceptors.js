export const interceptors = {
    onRequest: ({ request, options }) => {},
    onResponse: ({ request, options, response }) => {},
    onRequestError: ({ request, options, error }) => {
        console.log(error);
    },
    onResponseError: ({ request, options, response }) => {
    },
}