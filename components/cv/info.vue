<template>
    <div>
        <v-card color="transparent" class="d-flex" flat>
            <v-icon class="d-inline pr-1"  :class="colortext">
                {{Abstract.icon}}
            </v-icon>
            <div>
                <v-divider class="pt-0" ></v-divider>
                <v-card-title class="pa-0" :class="colortext">
                    {{Abstract.title}}
                </v-card-title>
                 <v-divider class="pt-0"></v-divider>
                <v-card-text class="body-1 pl-0" style="width:50%">
                    {{Abstract.text}}
                </v-card-text>
            </div>
            </v-card>
            <v-card color="transparent" class="d-flex mt-12" flat>
            <v-icon class="d-inline pr-1"  :class="colortext">
                {{Qualification.icon}}
            </v-icon >
            <div style="width:100%!important">
                <v-divider class="pt-0" ></v-divider>
                <v-card-title class="pa-0"  :class="colortext">
                    {{Qualification.title}}
                </v-card-title>
                 <v-divider class="pt-0"></v-divider>
                <v-card-text class="body-1 pl-0" style="width:50%">
                    {{Qualification.text}}
                </v-card-text>
            </div>
            </v-card>



            <v-card color="transparent" class="d-flex mt-12" flat>
            <div style="width:100%!important">
                <v-divider class="pt-0" ></v-divider>
                <v-card-title class="pa-0" :class="colortext">
                    skilse
                </v-card-title>
                <v-divider class="pt-0" ></v-divider>
            </div>
            </v-card>
            <v-row>
                <v-col md="6" sm="12" cols="12">
                    <skil/>
                </v-col>
                <v-col md="6" sm="12" cols="12">
                    <skil2/>
                </v-col>
            </v-row>
            <v-divider class="mt-6"></v-divider>
             <v-row>
                <v-col md="6" sm="12" cols="12">
                    <skil3/>
                </v-col>
                <v-col md="6" sm="12" cols="12">
                    <skil4/>
                </v-col>
            </v-row>

            
    </div>
</template>
<script>
import {mapState} from "vuex"
import {mapGetters} from "vuex"
import skil from "./skils"
import skil2 from "./skils2"
import skil3 from "./skils3"
import skil4 from "./skils4"
export default {

    computed:{
        ...mapState("cv",["Abstract","Qualification"]),
    ...mapGetters(["maincolor","colortext"])

    },
    components:{
        skil,
        skil2,
        skil3,
        skil4
        }
    
}
</script>