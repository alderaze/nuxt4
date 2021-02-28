<template>
    <div>
        <v-row>
            <v-col 
            md="3" 
            sm="6" 
            cols="12"
            v-for="(item, index) in info" :key="index"
            >
            <v-card class="d-flex align-center">
                <v-btn
                class="mx-2"
                fab
                dark
                :color="item.color"
                >
                <v-icon dark>
                    {{item.icon}}
                </v-icon>
                </v-btn>

                <div>
                    <v-card-text class="pb-0">
                        {{item.name}}
                    </v-card-text>
                    <v-card-title class="pt-0">
                        ${{(item.value-30)+con}}
                    </v-card-title>
                </div>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
   mounted(){
    this.an()
   },
    data(){
        return{
        con: 0,
      counter: false,
            info:[
                {color:"purple",icon:"fa fa-briefcase",name:"Total income",value:parseInt("75")},
                {color:"pink",icon:"fa fa-credit-card",name:"New expense",value:parseInt("343")},
                {color:"indigo",icon:"fa fa-users",name:"Daily Visits",value:parseInt("54")},
                {color:"blue",icon:"fa fa-life-ring",name:"Bounce rate",value:parseInt("133")}
            ]
        }
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
        
            
        }



        
        
}
</script>