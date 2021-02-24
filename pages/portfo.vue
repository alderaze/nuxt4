<template >
    <div>
        <div>
            <h1 class="text-center text-md-h2 my-16 text-sm-h4">frontend</h1>
            <p class="headline text-center pa-md-16 mx-md-16">Welcome to My Business Gallery. This business fair does not express my ultimate skills</p>
        </div>
        <v-row>
            <v-col md="6" sm="12" cols="12" v-for="web in basics" :key="web.id">
                <v-card
                data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                class="mx-auto"
                max-width="90%"
                >
                <v-img
                class="white--text align-end"
                height="300px"
                :src= web.img
                >
                </v-img>
                 <v-divider class="mx-4"></v-divider>
                <v-card-title class="headline font-weight-medium text-capitalize" :class="colortext">{{web.name}}</v-card-title>
                <v-card-title class="headline font-weight-medium text-capitalize">dan by</v-card-title>
                <v-card-text class="text--primary body-1">
                <div class="text-capitalize">{{web.skils}}</div>

                </v-card-text>
                <v-card-title class="headline font-weight-medium text-capitalize">{{web.res}}</v-card-title>


                <v-card-actions>
                <v-btn
                    :color="maincolor"
                    text
                    href="#"
                >
                live view
                </v-btn>

                </v-card-actions>
            </v-card>
            </v-col>
          
        </v-row>
        <v-divider class="mx-4 mt-10"></v-divider>
            <p class="text-md-h4 font-weight-normal pl-4 mt-16">Average</p>

        <v-row>
            <v-col md="6" sm="12" class="pt-10" cols="12" v-for="web in average" :key="web.id">
                <v-card
                data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                class="mx-auto"
                max-width="90%"
                >
                <v-img
                class="white--text align-end"
                height="300px"
                :src= web.img
                >
                </v-img>
                 <v-divider class="mx-4"></v-divider>
                <v-card-title class="headline font-weight-medium text-capitalize" :class="colortext">{{web.name}}</v-card-title>
                <v-card-title class="headline font-weight-medium text-capitalize">dan by</v-card-title>
                <v-card-text class="text--primary body-1">
                <div class="text-capitalize">{{web.skils}}</div>

                </v-card-text>
                <v-card-title class="headline font-weight-medium text-capitalize">{{web.res}}</v-card-title>


                <v-card-actions>
                <v-btn
                    :color="maincolor"
                    text
                    href="#"
                >
                live view
                </v-btn>

                </v-card-actions>
            </v-card>
            </v-col>
          
        </v-row>

        <v-divider class="mx-4 mt-10"></v-divider>
        <p class="text-md-h4 font-weight-normal pl-4 mt-16">advanced</p>

        <v-row>
            <v-col md="6" sm="12" class="pt-10" cols="12" v-for="web in advancedvue" :key="web.id">
                <v-card
                data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                class="mx-auto"
                max-width="90%"
                >
                <v-img
                class="white--text align-end"
                height="300px"
                :src= web.img
                >
                </v-img>
                 <v-divider class="mx-4"></v-divider>
                <v-card-title class="headline font-weight-medium text-capitalize" :class="colortext">{{web.name}}</v-card-title>
                <v-card-title class="headline font-weight-medium text-capitalize">dan by</v-card-title>
                <v-card-text class="text--primary body-1">
                <div class="text-capitalize">{{web.skils}}</div>

                </v-card-text>
                <v-card-title class="headline font-weight-medium text-capitalize">{{web.res}}</v-card-title>


                <v-card-actions>
                <v-btn
                    :color="maincolor"
                    text
                    href="#"
                >
                live view
                </v-btn>

                </v-card-actions>
            </v-card>
            </v-col>
          
        </v-row>
      
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    data(){
        return{
           
        basics:[
          {
                ani:"flip-left",
                img:require("../assets/img/pas1.JPG"),
                name:"basics",
                res:"Not responsive",
                skils:"html && sass && javascript && JQuery"
            },
      {
                img:require("../assets/img/pas2.JPG"),
                name:"basics",
                res:"Not responsive",
                skils:"html && sass && javascript && JQuery",
                ani:"flip-right",

            }
        ],
        average:[
            {
                img:require("../assets/img/med1.JPG"),
                name:"Average",
                res:"Not responsive",
                skils:"html && sass && javascript && JQuery && bootstrap",
                ani:"flip-left",

            },
            {
                img:require("../assets/img/med2.JPG"),
                name:"Average",
                res:"responsive",
                skils:"html && sass && javascript && JQuery && bootstrap",
                ani:"flip-right",

            },
            {
                img:require("../assets/img/med3.JPG"),
                name:"Average",
                res:"responsive",
                skils:"html && sass && javascript && JQuery && bootstrap",
                ani:"flip-left",

            },
            {
                img:require("../assets/img/med4.JPG"),
                name:"Average",
                res:"responsive",
                skils:"html && sass && javascript && JQuery && bootstrap",
                ani:"flip-right",

            },
            {
                img:require("../assets/img/med5.JPG"),
                name:"Average",
                res:"responsive",
                skils:"html && sass && javascript && JQuery && bootstrap",
                ani:"flip-left",

            },
            
            ],
        advancedvue:[
            {
                img:require("../assets/img/vue1.jpg"),
                name:"advanced vue",
                res:"responsive",
                skils:"html && css && vue.js && vuetify && vuex && vuerout",
                ani:"flip-right",

            },
        ]
    }
    },
    computed:{
        ...mapGetters(["colortext","maincolor"])
    }
}
</script>