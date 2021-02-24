<template>
     <v-card flat color="transparent">
                <v-card-title class="display-1 font-weight-bold"> html</v-card-title>
            <v-card 
            v-for="i in html" 
            :key="i.id" 
            flat 
            class="mt-8"
            color="transparent">
            <v-icon :class="colortext" size="30">{{i.icon}}</v-icon>
                <v-card-title class="d-inline"> {{i.name}}</v-card-title>
                <v-progress-linear
                :value="i.val"
                height="20"
                class="mt-3"
                striped
                color="deep-orange"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            


            <v-card 
            flat 
            class="mt-8"
            color="transparent">
            <div class="d-flex">
                    <v-img max-width="30"  max-height="30" >
                    <img width="100%"  height="100%" src="../../assets/pug.svg" alt="svg">
                    </v-img>
                    <v-card-title class="pa-0 pl-4 ma-0" >template engine pugJS </v-card-title>
                </div>
                <v-progress-linear
                value="50"
                height="20"
                class="mt-3"
                striped
                color="deep-orange"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            <appDilo :info="html">
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
    name:"appMyhtml",
computed:{
    ...mapGetters("sklis",["html","admin"]),
    ...mapGetters(["colortext","maincolor"])
},
components:{appDilo}    
}
</script>