<template >

<div>
    
    <v-container fulid>
    <div class="text-center">
        <h1 class="text-md-h2 text-sm-h4 font-weight-bold py-16" :class="colortext" >My Frontand Skills</h1>    
    </div>
    <v-row>
        <v-col md="6" sm='12' cols="12" class="px-md-13">
           <app-Myhtml/>
        </v-col>
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <app-css/>
        </v-col>
    </v-row>
     <v-row class="mt-16">
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <app-js/>
        </v-col>
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <app-boot/>
        </v-col>
    </v-row>
    <v-row class="mt-16">
        <v-col md="6" sm="12" cols="12" class="px-md-13">
            <app-Task/>
        </v-col>
    </v-row>

     <v-row class="mt-16">
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <app-vue/>
        </v-col>
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <appFy/>
        </v-col>
    </v-row>
      <v-row class="mt-16">
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <app-api/>
        </v-col>
        <v-col md="6" sm='12' cols="12" class="px-md-13">
            <appCmd/>
        </v-col>
    </v-row>
  
</v-container>
  
</div>
</template>

<script>
import appMyhtml from "../components/skils/appMyhtml"
import appCss from "../components/skils/appCss"
import appJs from "../components/skils/appJs"
import appBoot from "../components/skils/appBoot"
import appTask from "../components/skils/appTask"
import appVue from "../components/skils/appVue"
import appFy from "../components/skils/appFy"
import appApi from "../components/skils/appApi"
import appCmd from "../components/skils/appCmd"
import {mapGetters} from "vuex"
export default {
    data(){
        return{

        }
    },
computed:{
    ...mapGetters("sklis",["html"]),
    ...mapGetters(["colortext"])
},
components:{
    appMyhtml,
    appCss,
    appJs,
    appBoot,
    appTask,
    appVue,
    appFy,
    appApi,
    appCmd,
    
    }    
}
</script>