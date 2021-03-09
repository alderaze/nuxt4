<template>
  <v-app class="ee" dark :class="$vuetify.theme.isDark?'':'bodyground'">
  <app-Nave/>
  <app-Sittings/>
    <v-main>
      <v-container fluid>
        
        <nuxt />
      </v-container>
    </v-main>

      <app-Footer/>
    
  </v-app>
</template>

<script>


import appNave from"./layout/appNave"
import appFooter from"./layout/appFooter"
import appSittings from"./layout/appSittings"
export default {
 
  data(){
    return {
      
    }
  },
  methods:{
    da(){
      console.log(this.$vuetify.theme.isDark)
    }
  },
  components:{appNave,appSittings,appFooter},
  middleware:"med"
}
</script>

<style>
.ee{
  height: 2000px;
}
.bodyground{

  background: #f1f4f6!important;
}

</style>



