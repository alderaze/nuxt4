<template>
    <v-row class="pt-16">
        <v-col md='4' sm='12' cols="12">
            <p class="text-uppercase" :class="colortext">user</p>
            <v-card class="py-8">
                <v-row class="ma-0">
                    <v-col class="text-center">
                        <p class="body-2">New Users</p>
                        <p 
                        :class="colortext"
                        class="text-md-h3 font-weight-black text-md-h4">{{(val1-30)+con}}</p>
                    </v-col>
                    <v-divider
                    vertical
                    inset
                    ></v-divider>
                    <v-col class="text-center">
                        <p class="body-2">Return Visitors</p>
                        <p 
                        :class="colortext"
                        class="text-md-h3 font-weight-black text-md-h4">{{(val2-30)+con}}</p>
                    </v-col>
                </v-row>
                <v-divider 
                class="my-3" 
                style="padding:1px;height:1px!important;background:#f1f4f6!important" ></v-divider>
                <div class="px-3">
                    <div class="d-flex justify-space-between">
                        <p class="body-2 text-capitalize">New Users</p>
                        <p>{{valueDeterminate}}%</p>
                    </div>
                    <v-progress-linear
                    v-model="valueDeterminate"
                    color="deep-purple accent-4"
                    height="2"
                    ></v-progress-linear>
                    <br>
                    <div class="d-flex justify-space-between">
                        <p class="body-2 text-capitalize">Return Visitors</p>
                        <p>{{valueDeterminate}}%</p>
                    </div>
                    <v-progress-linear
                    v-model="valueDeterminate"
                    color="pink"
                    height="2"
                    ></v-progress-linear>
                    <br>
                    <div class="d-flex justify-space-between">
                        <p  class="body-2 text-capitalize">Engagement</p>
                        <p>{{valueDeterminate}}%</p>
                    </div>
                    <v-progress-linear
                    v-model="valueDeterminate"
                    color="indigo darken-2"
                    height="2"
                    ></v-progress-linear>
                   
            </div>

            </v-card>
        </v-col>
        
        <v-col md='8' sm='12' cols="12">
            <p :class="colortext" class="text-uppercase">Earning Report</p>
            <v-card color="transparent" flat>
                    <v-card
                    class="mx-auto text-center"
                    color="green"
                    dark
                    max-width="600"
                >
                    <v-card-text>
                    <v-sheet color="rgba(0, 0, 0, .12)">
                        <v-sparkline
                        :value="value3"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="24"
                        stroke-linecap="round"
                        smooth
                        >
                        <template v-slot:label="item">
                            ${{ item.value3 }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>

                    <v-card-text>
                    <div class="display-1 font-weight-thin">
                        Sales Last 24h
                    </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="justify-center">
                    <v-btn
                        block
                        text
                    >
                        Go to Report
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import {mapGetters} from "vuex"
export default {
     mounted(){
    this.an()
   },
    data(){
        return{
            valueDeterminate: 50,
            con: 0,
            val1:parseInt("225"),
            val2:parseInt("225"),
             value3: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
        }
    },
    computed:{
        ...mapGetters(["colortext"])
    },
    methods: {
        an(){
                let i = 0;
                
                this.tim = window.setInterval(function(){
                    i ++
                    if(i >= 30){
                        clearInterval(this.tim)
                    }
                    return  this.con = i

                }.bind(this),50)
            },
    },
    
}
</script>