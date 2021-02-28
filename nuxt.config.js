import colors from 'vuetify/es5/util/colors'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - alderaze',
    title: 'zwzeo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link:[ {rel:"preconnect", href:"https://fonts.gstatic.com"}],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
 '~/static/font-awesome-animation.min.css',
 "@fortawesome/fontawesome-free/css/all.css",
 '~/assets/over.css',


  ],
  loading: {
    loading: '~/components/Loading.vue'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~/plugins/animate",ssr:false},
    {src: "~/plugins/typed.js", ssr: true },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    breakpoint: { mobileBreakpoint: 960 },
    icons: {
      iconfont: "fa",
    },
   
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'posr',
        path: '/psot',
        component: resolve(__dirname, 'pages/')
      })
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
