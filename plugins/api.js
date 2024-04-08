export default defineNuxtPlugin(() => {
    const userAuth = useCookie('token')
    const config = useRuntimeConfig()

    const $api = $fetch.create({
        onRequest({ request, options, error }) {
            if (userAuth.value) {
                // Add Authorization header
                options.headers = options.headers || {}
                options.headers.token = userAuth.value
            }
        },
        onResponse ({ response }) {
            // response._data = new myBusinessResponse(response._data)
        },
        onResponseError({ response }) {
            if (response.status === 401) {
                return navigateTo('/login')
            }
        }
    })
    // Expose to useNuxtApp().$customFetch
    return {
        provide: {
            api: $api
        }
    }
})