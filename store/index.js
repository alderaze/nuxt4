import nav from "./navbar/nav";
import drawer from "./navbar/drawer";
import mycolor from "./theme/getmaincolor";
import sklis from "./skils/main"
import cv from "./cv/cv"


const storee ={
    state: () => ({
  }),
getters:{},
  mutations: {

    

  },
    actions: {

    },
    modules: {
    naving: nav,
    mycolor: mycolor,
    drawer: drawer,
    sklis:sklis,
    cv:cv,
  
  },


  }


export default storee