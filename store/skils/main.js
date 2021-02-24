const nav = {
    namespaced: true,
    state:() => ({
      admin:true,
      html:{
        html:{icon:"fab fa-html5",name:'html && html5',val:80},
      },
      css:{
        css:{icon:"fab fa-css3-alt", name:"css && css3",val:80},
        sass:{icon:"fab fa-sass",name:"scss",val:60},
      },
      js:{
        js:{icon:"fab fa-js",name:"javascript", val:80},
        oop:{icon:"fab fa-js",name:"oop",val:75},
        jq:{icon:"JQuery",name:"jquery",val:70}
      },
      task:{
        gulp:{icon:"fab fa-gulp",name:"gulp.js",val:30}
      },
      fram:{
        boot:{icon:"fab fa-bootstrap",name:"bootstrap",val:80},
      },
      vue:{
        vue:{icon:"fab fa-vuejs",name:"vue.js",val:80},
        vuex:{icon:"fab fa-vuejs",name:"vuex",val:90},
        route:{icon:"fab fa-vuejs",name:"vueRouter",val:90},
        nuxt:{icon:"fab fa-vuejs",name:"nuxt.js",val:70},
      },
      fram2:{
        fily:{name:"vuetify",val:80},
      },
      api:{
        json:{name:"json",val:85},
        ajax :{name:"ajax ",val:75},
        axios:{name:"axios",val:80}
      },
      
      cmd:{icon:"fab fa-cuttlefish",name:'cmd',val:30},
      githup:{icon:"fab fa-github",name:'gitHup',val:50},
    }),
    getters: {
      admin(state){
        return state.admin
      },
    
      html(state){
        return state.html
      },
      js(state){
        return state.js
      },
      css(state){
        return state.css
      },
      task(state){
        return state.task
      },
      fram(state){
        return state.fram
      },
      vue(state){
        return state.vue
      },
      fram2(state){
        return state.fram2
      },
      githup(state){
        return state.githup
      },
      cmd(state){
        return state.cmd
      },
      api(state){
        return state.api
      },
    },
    mutations: {
    
     
    },
  
    actions: {},
  };
  
  export default nav;
  