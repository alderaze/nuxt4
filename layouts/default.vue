<template>
  <v-app class="ee" dark :class="$vuetify.theme.isDark?'':'bodyground'">
  <app-Nave/>
  <app-Sittings/>
    <v-main>
      <v-container fluid>
        
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
    padless
    height="50px"
  >
  <v-card class="text-center" width="100%">
    <v-card-title class="d-block tex-center">
      dan 2021
    </v-card-title>
  </v-card>

  </v-footer>
    
  </v-app>
</template>

<script>


import appNave from"./layout/appNave"
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
  components:{appNave,appSittings},
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



