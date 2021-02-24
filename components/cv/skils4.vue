<template>
<div>
           <v-card 
            v-for="i in api" 
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
                color="indigo"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            <v-divider class="mt-7 mr-16" ></v-divider>
            <v-card 
            flat 
            class="mt-4 mr-16 pr-16"
            color="transparent">
            <v-icon :class="colortext" size="30">{{cmd.icon}}</v-icon>
                <v-card-title class="d-inline"> {{cmd.name}}</v-card-title>
                <v-progress-linear
                :value="cmd.val"
                height="15"
                class="mt-3"
                striped
                color="indigo"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            <v-divider class="mt-7 mr-16" ></v-divider>
            <v-card 
            flat 
            class="mt-4 mr-16 pr-16"
            color="transparent">
            <v-icon :class="colortext" size="30">{{githup.icon}}</v-icon>
                <v-card-title class="d-inline"> {{githup.name}}</v-card-title>
                <v-progress-linear
                :value="githup.val"
                height="15"
                class="mt-3"
                striped
                color="indigo"
                >
                <template v-slot:default="{ value }">
                    <strong class="white--text">{{ Math.ceil(value) }}%</strong>
                </template>
                </v-progress-linear>
            </v-card>
            

</div>
        
</template>

<script>
import {mapGetters} from "vuex"
export default {

    computed:{
    ...mapGetters("sklis",["api","cmd","githup"]),
    ...mapGetters(["maincolor","colortext"])

},
    
}
</script>