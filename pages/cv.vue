<template >
    <v-app class="body">
        <h1 class="text-center ma-16 text-md-h3 " :class="colortext">information cv</h1>
        <v-card color="transparent" class="pl-12" flat>
            <info/>
        </v-card>
    </v-app>
</template>

<script>
import info from "../components/cv/info"
import {mapGetters} from "vuex"
export default {
    layout: 'cv',
    data() {
        return {
        }
    },
    computed:{...mapGetters(["colortext"])},
    components:{info}
    
}
</script>

<style scoped>
</style>