<template>
    <div>
        <v-row>
            <v-col 
            md="3" 
            sm="6" 
            cols="12"
            v-for="(i,n) in info"
            :key="n"
            >
            <v-card class="pa-3 pb-5">
                <div class="d-flex justify-space-between pb-3">
                    <div>
                        <p class="display-1 mb-0">{{i.numb}}</p>
                        <p class="caption">{{i.title}}</p>
                    </div>
                        <p class="display-1">{{i.value}}%</p>
                </div>
                <v-progress-linear
                        v-model="i.valueDeterminate"
                        :color="i.color"
                        height="2"
                        ></v-progress-linear>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   mounted(){
    this.an()
   },
    data(){
        return{
            info:[
                {numb:"234",value:"23",title:"Interested",color:"red",valueDeterminate:50},
                {numb:"234",value:"30",title:"Going",color:"purple",valueDeterminate:20},
                {numb:"234",value:"80",title:"Maybe",color:"blue",valueDeterminate:80},
                {numb:"234",value:"30",title:"Not Going",color:"indigo",valueDeterminate:40}
            ]
        }
    },
    computed:{...mapGetters(["maincolor"])},
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


    beforeDestroy () {
        clearInterval(this.interval)
    },
    mounted () {
        this.an()
        
        this.interval = setInterval(() => {
        if (this.value === 100) {
            return (this.value = 0)
        }
        this.value += 10
    }, 1000)
    },
        
        
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>