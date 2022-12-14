import {config} from 'shared/env';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            core: config.COREURI
        }
    },
    modules: [
        'nuxt-windicss',
        '@pinia/nuxt',
        '@vue-macros/nuxt'
    ],
    ssr: false
});
