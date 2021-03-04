<template>
    <div>
        <v-row>
            <v-col md="8" sm="12" cols="12" >
                <v-card class="pa-3">
                    <div class="d-flex rap">
                            <v-list-item  v-for="(i,n) in list" :key="n">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{i.tit}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="display-1">
                                        {{i.numb}}
                                    </v-list-item-subtitle>
                                    <v-list-item-title class="d-flex">
                                        <span class="font-weight-black">{{i.val}}</span>
                                        <p>{{i.tit2}}</p>
                                    </v-list-item-title>
                                </v-list-item-content>

                            </v-list-item>

                    </div>
                    <v-card flat>
                        <v-img :src="require('../../assets/img/bar-interactive-key.png')"></v-img>
                        
                    </v-card>
                </v-card>

            </v-col>

            <v-col md ="4" sm="12" cols="12"></v-col>
        </v-row>
    </div>
</template>
<script>
export default {

    data(){
        return{
            list:[
                {tit:"Tickets Sold",numb:"800",val:"30%",tit2:"of 10,000 Total"},
                {tit:"Tickets Sold",numb:"800",val:"30%",tit2:"of 10,000 Total"},
                {tit:"Tickets Sold",numb:"800",val:"30%",tit2:"of 10,000 Total"}
            ]
        }
    }
    
}
</script>

<style >
.rap{
    flex-wrap: wrap;
}
    
</style>