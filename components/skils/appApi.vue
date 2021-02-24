<template>
     <v-card flat color="transparent">
                <v-card-title class="display-1 font-weight-bold"> json</v-card-title>
            <v-card 
            v-for="i in api" 
            :key="i.id" 
            flat 
            class="mt-8"
            color="transparent">
                <v-card-title class="d-inline"> {{i.name}}</v-card-title>
                <v-progress-linear
                :value="i.val"
                height="20"
                class="mt-3"
                striped
                color="blue-grey"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
           <appDilo :info="api">
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
    ...mapGetters("sklis",["api","admin"]),
    ...mapGetters(["colortext","maincolor"])
},
components:{appDilo}

}
</script>