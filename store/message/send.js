const sendmessage = {
    namespaced: true,
    state:() => ({
        message:[]
    }),
    getters: {
        message(state){
            return state.message
        }
    },
    mutations: {
        getmessage(state,message){
            return state.message = message
        }
    },
    actions: {},
};
export default sendmessage;