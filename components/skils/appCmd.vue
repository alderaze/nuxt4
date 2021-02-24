<template>
     <v-card flat color="transparent">
            <v-card-title class="display-1 font-weight-bold"> githup</v-card-title>
            <v-card 
            flat 
            class="mt-8"
            color="transparent">
            <v-icon :class="colortext" size="30">{{githup.icon}}</v-icon>
                <v-card-title class="d-inline"> {{githup.name}}</v-card-title>
                <v-progress-linear
                :value="githup.val"
                height="20"
                class="mt-3"
                striped
                color="blue-grey"
                >
                <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
             <v-card-title class="display-1 font-weight-bold">command line </v-card-title>
            <v-card 
            flat 
            class="mt-8"
            color="transparent">
            <v-icon :class="colortext" size="30">{{cmd.icon}}</v-icon>
                <v-card-title class="d-inline"> {{cmd.name}}</v-card-title>
                <v-progress-linear
                :value="cmd.val"
                height="20"
                class="mt-3"
                striped
                color="blue-grey"
                >
                <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
           <appDilo :info="cmd">
            <template slot-scope="{close}">
                <v-btn
                v-if="admin"
                class="mt-5"
                @click="close"
                fab
                dark
                small
                :color="maincolor"
                >
                <v-icon dark>
                    mdi-plus
                </v-icon>
                </v-btn>
            </template>
            

            </appDilo>
            </v-card>
          
</template>

<script>
import appDilo from "./appDilo"
import {mapGetters} from "vuex"
export default {
    name:"appCss",
computed:{
    ...mapGetters("sklis",["cmd","githup","admin"]),
    ...mapGetters(["colortext","maincolor"])
},
components:{appDilo}

}
</script>