import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['https:////fonts.googleapis.com/css?family=Fleur+De+Leah'],
  googleFonts:{
    families:{
      'Fleur De Leah': [],
      'Licorice':[],
      'Source Code Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxtjs/google-fonts', 
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    optimizeDeps: {
      exclude: ['class-validator'],
    },
  },
});
