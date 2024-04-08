// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
      enabled: true,
    },
    modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/i18n', '@vueuse/nuxt'],
    runtimeConfig: {
        public: {
            baseURL: 'http://localhost:8000'
        }
    },
    app: {
        baseURL: '/', // defaulted by nuxt
        // Look into HeadAndMeta.vue for the rest
        head: {
            title: 'Nuxt Pinia',
            meta: [
                { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
                { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
                { 'http-equiv': 'Content-Style-Type', content: 'text/css' },
                { 'http-equiv': 'Content-Script-Type', content: 'text/javascript' },
                { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
            ],
            script: [
                { src: '/static/js/jquery.min.js', type: 'text/javascript', defer: true},
                { src: '/static/js/jquery-ui.min.js', type: 'text/javascript', defer: true },
                { src: '/static/js/jquery.sumoselect.min.js', type: 'text/javascript', defer: true },
                { src: '/static/js/jquery.dateandtime.js', type: 'text/javascript', defer: true },
                { src: '/static/js/common.ui.js', type: 'text/javascript', defer: true },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap' },
                { rel: 'stylesheet', href: '/static/css/reset.css' },
                { rel: 'stylesheet', href: '/static/css/sumoselect.min.css' },
                { rel: 'stylesheet', href: '/static/css/common.css' },
            ],

        },
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            'storeToRefs',
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
})