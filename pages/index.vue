<template>
  <div>
    <apphead/>
    
  </div>
</template>

<script>
import apphead from "../components/index/apphead"
import {  mapGetters } from "vuex";
export default {
 
  data(){

    return{
     
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/',
        },
      ],
    }

  },
 
  computed: {
    ...mapGetters(["colortext", "maincolor"]),
  },
  methods:{
    
  },
  components:{apphead}


  
}
</script>
<style >

.main .v-breadcrumbs__item{
  color: grey!important;
}
.main .v-breadcrumbs__item--disabled{
  color:rgb(0, 47, 255)!important
}
  
  
</style>