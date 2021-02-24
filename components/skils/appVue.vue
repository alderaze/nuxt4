<template>
     <v-card flat color="transparent">
                <v-card-title class="display-1 font-weight-bold"> vue && vuecli</v-card-title>
            <v-card 
            v-for="i in vue" 
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
                color="teal"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            <appDilo :info="vue">
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
    name:"appvue",
computed:{
    ...mapGetters("sklis",["vue","admin"]),
    ...mapGetters(["colortext","maincolor"])
},    
components:{appDilo}

}
</script>