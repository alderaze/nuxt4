import nav from "./navbar/nav";
import drawer from "./navbar/drawer";
import mycolor from "./theme/getmaincolor";
import sendmessage from "./message/send";


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
    sendmessage:sendmessage
  
  },


  }


export default storee