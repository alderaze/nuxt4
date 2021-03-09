<template>
  <div>
    
  </div>
</template>

<script>
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