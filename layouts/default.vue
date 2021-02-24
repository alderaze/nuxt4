<template>
  <v-app dark >
  <app-Nave/>
  <app-Sittings/>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

     <v-footer
    dark
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
  
  components:{appNave,appSittings},
  middleware:"med"
}
</script>
