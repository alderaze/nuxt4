<template>
     <v-card flat color="transparent">
                <v-card-title class="display-1 font-weight-bold"> framework</v-card-title>
            <v-card 
            flat 
            class="mt-8"
            color="transparent">
            <div class="d-flex">
                    <v-img max-width="30"  max-height="30" >
                    <img width="100%"  height="100%" src="../../assets/img/vuetify.png" alt="svg">
                    </v-img>
                    <v-card-title class="pa-0 pl-4 ma-0" >vuetify </v-card-title>
                </div>
                <v-progress-linear
                value="85"
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
            </v-card>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"appfy",
computed:{
    ...mapGetters("sklis",["admin"]),
    ...mapGetters(["colortext","maincolor"])
},

}
</script>