<template>
    <div>
        <v-row>
            <v-col md="8" sm="12" cols="12">
                <v-card class="d-flex align-center" flat>
                    <v-card-title class="body-2">#</v-card-title>
                    <v-card-title class="body-2">client</v-card-title>
                    <v-card-title class="body-2">client</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-title class="body-2">amoute</v-card-title>
                    <v-card-title class="body-2">status</v-card-title>
                    <v-card-title class="body-2">action</v-card-title>

                </v-card>

                <v-card
                v-for="(item,index) in info"
                :key="index"
                flat 
                class="d-flex align-center mt-2 py-0">
                    <v-card-title class="caption">{{item.numb}}</v-card-title>
                    <v-card-title class="caption">
                        <v-btn 
                        depressed 
                        color="red" 
                        class="px-0 white--text" 
                        height="40" 
                        min-width="40">
                            {{item.icon}}
                        </v-btn>
                    </v-card-title>
                    <div class="d-block">
                        <v-card-title class="caption py-0 my-0">{{item.name}}</v-card-title>
                        <v-card-title class="caption py-0 my-0">{{item.email}}</v-card-title>
                    </div>
                    <v-spacer></v-spacer>
                    <v-card-title class="caption">
                        <v-btn 
                        style="border:1px solid red"
                        class="px-0" 
                        depressed 
                        height="30" 
                        min-width="50">
                            {{item.status}}
                        </v-btn>
                    </v-card-title>
                    <v-card-title class="caption">
                        <v-btn 
                        color="transparent"
                        depressed
                        class="px-0" 
                        height="30" 
                        min-width="30">
                            <v-icon size="15">
                                {{item.icon1}}
                            </v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-title class="caption">
                        <v-btn 
                        color="transparent"
                        depressed
                        class="px-0" 
                        height="30" 
                        min-width="30">
                            <v-icon size="15">
                                {{item.icon2}}
                            </v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-title class="caption">
                        <v-btn
                        color="transparent"
                        depressed
                        class="px-0" 
                        height="30" 
                        min-width="30">
                            <v-icon size="15">
                                {{item.icon3}}
                            </v-icon>
                        </v-btn>
                    </v-card-title>

                </v-card>



            </v-col>
            <v-col md="4" sm="12" cols="12">
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    ></v-img>

                    <v-card-title>
                    Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                    1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>

                <v-card class="mt-16 px-4 py-7">
                    <div class="d-flex justify-space-between">
                        <p class="body-2 text-capitalize">Return Visitors</p>
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
                </v-card>
            </v-col>
        </v-row>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
        show: false,
        valueDeterminate: 50,
        info:[
            {
                numb:"01",
                icon:"ss",
                name:"South Shyanne",
                email:"south.shyanne@example.com",
                price:"$1200",
                status:"dan",
                icon1:"far fa-envelope",
                icon2:"fas fa-print",
                icon3:"far fa-trash-alt",
                },
                {
                numb:"02",
                icon:"hh",
                name:" Shyanne",
                email:"south.shyanne@example.com",
                price:"$1200",
                status:"dan",
                icon1:"far fa-envelope",
                icon2:"fas fa-print",
                icon3:"far fa-trash-alt",
                },
                {
                numb:"03",
                icon:"ss",
                name:"South Shyanne",
                email:"south.shyanne@example.com",
                price:"$1200",
                status:"dan",
                icon1:"far fa-envelope",
                icon2:"fas fa-print",
                icon3:"far fa-trash-alt",
                },
                {
                numb:"04",
                icon:"ss",
                name:"South Shyanne",
                email:"south.shyanne@example.com",
                price:"$1200",
                status:"dan",
                icon1:"far fa-envelope",
                icon2:"fas fa-print",
                icon3:"far fa-trash-alt",
                },
                {
                numb:"05",
                icon:"ss",
                name:"South Shyanne",
                email:"south.shyanne@example.com",
                price:"$1200",
                status:"dan",
                icon1:"far fa-envelope",
                icon2:"fas fa-print",
                icon3:"far fa-trash-alt",
                },
                {
                numb:"06",
                icon:"ss",
                name:"South Shyanne",
                email:"south.shyanne@example.com",
                price:"$1200",
                status:"dan",
                icon1:"far fa-envelope",
                icon2:"fas fa-print",
                icon3:"far fa-trash-alt",
                },
                
            ]
        }
    }
}
</script>