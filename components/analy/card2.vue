<template>
<v-card class="mt-10">
  <v-row>
        <v-col md="4" sm="6" cols="12">
            <v-card class="pa-3" flat>
                <v-card-title>
                    Audience Metrics
                </v-card-title>
                <v-card-text>
                    Audience It is a long established fact that a reader will be distracted
                </v-card-text>
                <div class="pl-3">
                    <v-row>
                        <v-col>
                            <p class="mb-0">Users</p>
                            <p class="text-md-h5 text-sm-h6 pt-0 ma-0 font-weight-black">1233</p>
                        </v-col>
                        <v-col>
                            <p class="mb-0">Users</p>
                            <p class="text-md-h5 text-sm-h6 pt-0 ma-0 font-weight-black">1233</p>
                        </v-col>
                    </v-row>
                </div>
                <svg style="height: 250px; width:250px; " viewBox="0 0 200 200">
                    <g>
                        <path 
                        d="M50,50 A 75 75 1 1 170 170
                        " 
                        stroke="#03A9F4"
                        stroke-width="40"
                        fill="none"></path>
                        <text x=165 y=100 fill="white"> 60%</text>
                        
                    </g>
                    <g >
                        <path class="mysvgTran"
                        d="M50,50 A 75 75  1 0 130 170
                        " 
                        stroke="purple "
                        stroke-width="40"
                        fill="none"></path>
                    <text x=15 y=120 fill="white"> 60%</text>
                    </g>
                </svg>
            </v-card>
        </v-col>
        <v-col md="8" sm="6" cols="12">
            <v-card flat class="pa-10">
                <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Location_of_Shabwah.svg/1200px-Location_of_Shabwah.svg.png">
                </v-img>
            </v-card>
        </v-col>
    </v-row>
</v-card>
  
</template>
<script>
import {mapGetters} from 'vuex'
export default {

    computed:{...mapGetters(['maincolor'])}
    
}
</script>

<style>

.mysvgTran{
    transform: translate(100px, 0px) rotateY( 178deg )!important
}
.hovestrok:hover{
            stroke-opacity: .8;
        }
    
</style>