<template>
  <v-container class="pt-0">
    <div>
    <p class="headline">mtPAge</p>
    <v-breadcrumbs
      active-class="color"
      :items="items"
      class="pt-0 mt-n3 pl-0 main"
      large
    ></v-breadcrumbs>
  </div>

  <!-- start cards 1 -->
  <card1/>
  <card2/>
  <card3/>
  </v-container>
</template>

<script>
import card1 from "./indexpage/card1"
import card2 from "./indexpage/card2"
import card3 from "./indexpage/card3"
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
 components:{
   card1,
   card2,
   card3
   }

  
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