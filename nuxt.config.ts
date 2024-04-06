// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/i18n', '@vueuse/nuxt'],

    app: {
        baseURL: '/', // defaulted by nuxt
        // Look into HeadAndMeta.vue for the rest
        head: {
            title: 'Nuxt Pinia',
            meta: [{charset: 'utf-8'}], // defaulted by nuxt
            viewport: 'width=device-width, initial-scale=1', // defaulted by nuxt
        },
    },

    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            'storeToRefs',
            'acceptHMRUpdate',
        ],
    },

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.ts',
                iso: 'en',
                name: 'English'
            },
            {
                code: 'ko',
                file: 'ko-KR.ts',
                iso: 'ko',
                name: '한국어'
            }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'ko',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
            cookieCrossOrigin: true,
            alwaysRedirect: true
        }
    },

    imports: {
        dirs: ['stores'],
    },

})