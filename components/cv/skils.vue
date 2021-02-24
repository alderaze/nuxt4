<template>
<div>
            <v-card 
            v-for="i in html" 
            :key="i.id" 
            flat 
            class="mt-4 mr-16 pr-16"
            color="transparent">
            <v-icon :class="colortext" size="30">{{i.icon}}</v-icon>
                <v-card-title class="d-inline"> {{i.name}}</v-card-title>
                <v-progress-linear
                :value="i.val"
                height="15"
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
            class="mt-4 mr-16 pr-16"
            color="transparent">
            <div class="d-flex">
                    <v-img max-width="30"  max-height="30" >
                    <img width="100%"  height="100%" src="../../assets/pug.svg" alt="svg">
                    </v-img>
                    <v-card-title class="pa-0 pl-4 ma-0" >template engine pugJS </v-card-title>
                </div>
                <v-progress-linear
                value="50"
                height="15"
                class="mt-3"
                striped
                color="deep-orange"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            <v-divider class="mt-7 mr-16" ></v-divider>
            <v-card 
            v-for="i in css" 
            :key="i.id" 
            flat 
            class="mt-4 mr-16 pr-16"
            color="transparent">
            <v-icon :class="colortext" size="30">{{i.icon}}</v-icon>
                <v-card-title class="d-inline"> {{i.name}}</v-card-title>
                <v-progress-linear
                :value="i.val"
                height="15"
                class="mt-3"
                striped
                color="blue-grey"
                >
                <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
</div>
        
</template>

<script>
import {mapGetters} from "vuex"
export default {

    computed:{
    ...mapGetters("sklis",["html","css","fram"]),
    ...mapGetters(["maincolor","colortext"])

},
    
}
</script>