// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
            '@nuxtjs/i18n',
        ],

        ['@nuxt/content', {}]
    ],
    css: ["bootstrap/dist/css/bootstrap.min.css"],
    meta: {
        link: [
            {
                href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css',
                rel: 'stylesheet',
            },
        ],
    },
    i18n: {
        /* module options */
        // add `vueI18n` option to `@nuxtjs/i18n` module options
        locales: ['en', 'ar'], // used in URL path prefix
        defaultLocale: 'en',
        vueI18n: {
            legacy: false,
            locale: 'en',
            messages: {
                en: {
                    welcome: 'Welcome', home: 'Home'
                },
                ar: {
                    welcome: 'مرحبا', home: 'الرنيسية'
                }
            }
        }
    },


})
